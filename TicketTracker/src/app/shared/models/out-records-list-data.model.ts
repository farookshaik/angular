import { StatusOut } from "./status-out.model";

export class OutRecordsListData<T> extends StatusOut
{
        public  Data : Array<T> =  new Array<T>();
        public  Total : number = 0;
} 