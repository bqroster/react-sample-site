// PostSlim (home, )
export type JobPostSlim = {
    id:           number,
    companyId:    number,
    companyName:  string,
    companyLogo:  string,
    position:     string,
    showDetails?: boolean,
    applyNow?:    boolean
};

export type JobPosts<R> = {
    items: Array<R>
};