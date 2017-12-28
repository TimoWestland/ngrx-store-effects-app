export function mapToEntities<T>(arr: Array<T>, exEntities: any) {
  if(Array.isArray(arr)) {
    return arr.reduce(
      (entities: { [id: number]: T }, item: any) => {
        return {
          ...entities,
          [item.id]: item
        };
      }, { ...exEntities }
    );
  } else {
    return {};
  }
}
