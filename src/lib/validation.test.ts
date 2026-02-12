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
  })
});
