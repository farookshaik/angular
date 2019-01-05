import { StatusOut } from "./status-out.model";

export class OutData<T> extends StatusOut
{
    public  ReturnValue : T;
}