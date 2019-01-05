
import { StatusOut } from "../status-out.model";

export class UserBasicDetailOutData extends StatusOut {
    public UserID: string = "";
    public UserName: string = "";
    public NameFirst: string = "";
    public NameMI: string = "";
    public NameLast: string = "";
    public EMail: string = "";
}