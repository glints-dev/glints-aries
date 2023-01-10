export {};
declare global {
  namespace Intl {
    function getCanonicalLocales(
      locales: string | string[] | undefined
    ): string[];
    type Locales = string[];
    type Type = 'conjunction' | 'disjunction' | 'unit';
    type Style = 'long' | 'short' | 'narrow';
    type LocaleMatcher = 'lookup' | 'best fit';
    interface ListFormatOptions {
      type: Type;
      style: Style;
      localeMatcher: LocaleMatcher;
    }
    interface ResolvedListFormatOptions {
      type: Type;
      style: Style;
      locale: Locale;
    }
    interface ElementPartition {
      type: 'element';
      value: ListPartition[] | string;
    }
    interface ListPartitionBase {
      value: string;
    }
    interface LiteralPartition extends ListPartitionBase {
      type: 'literal';
    }
    type ListPartition = ElementPartition | LiteralPartition;
    type ListPartitions = ReadonlyArray<ListPartition>;
    class ListFormat {
      constructor(
        locales?: string | Locales | undefined,
        options?: Partial<ListFormatOptions>
      );
      public static supportedLocalesOf(
        locales: string | Locales,
        options?: Record<string, unknown> | undefined
      ): Locales;
      public format(list?: Iterable<string>): string;
      public formatToParts(list?: Iterable<string>): ListPartitions;
      public resolvedOptions(): ResolvedListFormatOptions;
    }
  }
}
