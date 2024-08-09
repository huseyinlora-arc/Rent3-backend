import { AppService } from './app.service';
type apartType = {
    id: string;
    address: string;
    owner: string;
    rented: boolean;
    renter: string;
    renterWallet: string;
    renterProof: string;
};
type userCreateType = {
    walletAddress: string;
    nullifierHash: string;
    zkProof: string;
    verificationLevel: string;
    rentedAparts: apartType;
};
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createUser(data: userCreateType): Promise<string>;
}
export {};
