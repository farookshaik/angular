import { DataModelBase } from "./data-model-base.model";

export class PagingInData extends DataModelBase
{
    public Start: number = 1;
    public Limit: number = 25;
}