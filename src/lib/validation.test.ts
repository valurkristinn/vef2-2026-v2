import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('parse', () => {
  describe('parseTodo', () => {
    it('should parse text that contains , correctly', () => {
      const line = '2,Stjörnufræði,2,,"Oberon, Titania og Puck eru tungl hvaða plánetu",Úranusar'
      const result = parseLine(line);
      assert.strictEqual(result.question, "Oberon, Titania og Puck eru tungl hvaða plánetu")
    })
  })
});
