export default interface Filter {
  id: string;
  name: string;
  type: string;
  values:
    | [
        {
          id: string;
          name: string;
          results?: number;
        }
      ]
    | [];
}
