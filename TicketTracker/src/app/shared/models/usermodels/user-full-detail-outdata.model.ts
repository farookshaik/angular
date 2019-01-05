
import { UserBasicDetailOutData } from './user-basic-detail-outdata.model';

export class UserFullDetailOutData extends UserBasicDetailOutData {
    public IdCoOrdinator: string = "";
    public NameCoOrdinator: string = "";
    public CdLocation: string = "";
    public NameLocation: string = "";
    public CdSex: string = "";
    public PhWork: string = "";
    public PhHome: string = "";
    public PhCell: string = "";
    public IndEmpCol: string = "";
    public DtHire: Date;
}