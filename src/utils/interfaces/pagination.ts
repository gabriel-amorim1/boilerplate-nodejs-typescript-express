export interface RequestGetAllInterface {
    page?: string;
    size?: string;
    sortParam?: string;
    sortOrder?: string;
}

export interface GetAllWithoutPagination {
    where: Record<string, unknown>;
    order: {
        created_at?: 'DESC' | 'ASC';
    };
    orderBy: {
        columnName: string;
        order: 'DESC' | 'ASC';
    };
}

export interface OptionsTypeOrmGetAll extends GetAllWithoutPagination {
    take: number;
    skip: number;
}

export interface PaginateResponseProperties {
    count: number;
    limit: number;
    page: number;
    totalPages: number;
}
