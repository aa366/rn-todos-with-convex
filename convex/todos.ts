import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos").order("desc").collect()
        return todos
    },
})
export const addTodo = mutation({
    args: { text: v.string(), note: v.string() },
    async handler(ctx, args_0) {
        const todoId = await ctx.db.insert("todos", {
            text: args_0.text,
            isCompleted: false,
            note: args_0.note
        })
        return todoId
    },

})

export const toggleTodo = mutation({
    args: { id: v.id("todos") },
    async handler(ctx, args_0) {
        const todo = await ctx.db.get(args_0.id)
        if (!todo) throw new ConvexError("Todo not found")
        await ctx.db.patch(args_0.id, {
            isCompleted: !todo.isCompleted,
        })
    },
})

export const deleteTodo = mutation({
    args: { id: v.id("todos") },
    async handler(ctx, args_0) {
        await ctx.db.delete(args_0.id)
    },
})

export const updateTodo = mutation({
    args: { id: v.id("todos"), text: v.string(), note: v.string() },
    async handler(ctx, args_0) {
        await ctx.db.patch(args_0.id, {
            text: args_0.text,
            note: args_0.text
        })
    },
})

export const clearAllTodos = mutation({
    async handler(ctx, args_0) {
        const todos = await ctx.db.query("todos").collect()
        for (const todo of todos) {
            await ctx.db.delete(todo._id)
        }
        return { deletedCount: todos.length }
    },
})