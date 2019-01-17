import { Injectable } from "@angular/core";

@Injectable()
export class UpdateEmployerRecordData {
    public id_member: string = "";
    public member_name: string = "";
    public mem_ssn: string = "";
    public id_docket: string = "";
    //public cd_county: string = "";
    public ivd_id_case: string = "";
    public imiw_begin_date: Date;
    public imiw_sent: Date;
    public row_count: string = "";
}

