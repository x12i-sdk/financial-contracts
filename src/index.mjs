import assert from 'node:assert/strict';
import { DatasetEnvelopeSchema } from '@x12i/financial-contracts';

// Treat incoming JSON as untrusted data before it reaches application logic.
const incoming = JSON.parse('{"unexpected":"example input"}');
const result = DatasetEnvelopeSchema.safeParse(incoming);
assert.equal(result.success, false, 'An incomplete request should be rejected');
assert(result.error.issues.length > 0);

console.log('Rejected incomplete input:');
console.log(JSON.stringify(result.error.issues.map(issue => ({
  path: issue.path.join('.'),
  code: issue.code,
  message: issue.message,
})), null, 2));
