export class CreateProductDto {
  constructor(
    public readonly name: string,
    public readonly available: boolean,
    public readonly price: number,
    public readonlydescription: string,
    private readonly user: string, //ID
    public readonly category: string //ID
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateProductDto?] {
    const { name, available, price, description, user, category } = props;

    if (!name) return ["name is required"];
    if (!user) return ["user is required"];
    if (!category) return ["Missing category"];

    return [
      undefined,
      new CreateProductDto(
          name,
         !!available, 
         price, 
         description, 
         user, 
         category),
    ];
  }
}
