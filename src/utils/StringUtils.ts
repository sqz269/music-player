export class StringUtils {
  public static constructGrammaticalListJoin(list: string[], logicalConjunction: 'and' | 'or' = 'or'): string {
    if (list.length === 1) {
      return list[0];
    }

    if (list.length === 2) {
      return `${list[0]} ${logicalConjunction} ${list[1]}`;
    }

    return `${list.slice(0, -1).join(', ')}, ${logicalConjunction} ${list.slice(-1)[0]}`;
  }
}
