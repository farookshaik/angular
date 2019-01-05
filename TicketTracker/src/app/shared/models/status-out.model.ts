import { Status } from "./status.model";
import { DataModelBase } from "./data-model-base.model";

export class StatusOut extends DataModelBase {
    public  StatusList: Array<Status> = Array<Status>();
    public  UniqueID : string = "";
}