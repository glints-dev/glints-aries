import parse from '../../scripts/count-imports/parser';
import { ariesImportIdentifiers } from '../../scripts/count-imports/filters';

describe('ariesImportIdentifiers', () => {
  it('should count aries import identifiers', () => {
    const code = `
      import { XXX, YYY, ZZZ } from 'glints-aries';
    `;
    const ast = parse(code);
    expect(ariesImportIdentifiers(ast)).toBe(3);
  });

  it('should ignore other imports', () => {
    const code = `
      import { XXX } from 'glints-aries';
      import { OOO } from 'other';
      import something from 'otherr';
    `;
    const ast = parse(code);
    expect(ariesImportIdentifiers(ast)).toBe(1);
  });
});
