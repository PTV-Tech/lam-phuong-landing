export const enum FilterKeyEnum {
  JobTypes = 1,
  JobCategories = 2,
  ProductGroups = 3,
  Locations = 4,
}

export const CONFIG_BY_KEY = {
  [FilterKeyEnum.JobTypes]: {
    api: "/api/job-types",
    key: "job_types",
    title: "Loại công việc",
  },
  [FilterKeyEnum.JobCategories]: {
    api: "/api/job-categories",
    key: "job_categories",
    title: "Ngành nghề",
  },
  [FilterKeyEnum.ProductGroups]: {
    api: "/api/product-groups",
    key: "product_groups",
    title: "Nhóm sản phẩm",
  },
  [FilterKeyEnum.Locations]: {
    api: "/api/locations",
    key: "locations",
    title: "Địa điểm",
  },
};

export const COLUMN_NAMES_OF_JOBS_TABLE = {
  TITLE: "Tiêu đề",
  INTRODUCE: "Giới thiệu",
  LOCATION: "Name (from Khu vực)",
  SLUG: "Slug",
}

export const COLUMN_NAMES_OF_JOB_TYPES_TABLE = {
  TITLE: "Name",
  SLUG: "Slug"
}