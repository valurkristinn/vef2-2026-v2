import assert from 'node:assert';
import { describe, it } from 'node:test';
import { todoSchema } from './validation.js';

describe('parse', () => {
  describe('parseTodo', () => {
    it('should parse todo with a id as number, title as non-empty string and finished as boolean', () => {
      const todo = {id: 1, title: "test", finished: "on"}
      const result = todoSchema.safeParse(todo)
      assert(result.success)
    })

    it('should not parse todo with title as the empty string after trim()', () => {
      const todo = {id: 1, title: "    ", finished: "on"}
      const result = todoSchema.safeParse(todo)
      assert(result.error)
    })

    it('should not parse todo title longer then 255 characters', () => {
      const title = "12".repeat(128)
      const todo = {id: 1, title: title, finished: "on"}
      const result = todoSchema.safeParse(todo)
      assert(result.error)
    })
  })
});
