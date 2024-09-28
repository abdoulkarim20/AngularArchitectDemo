export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    dateOfBirth: Date;
    enrollmentDate: Date;
    major: string;
    studentId: string;
    address: IAdresse
    gpa?: number;
    courses?: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface IAdresse {
    address?: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    }
}
