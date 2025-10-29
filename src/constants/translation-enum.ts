import { MovieTypeEnum, MovieStatusEnum } from '@/constants/api/movie.constant';

export const movieTypeTranslations = {
    [MovieTypeEnum.SINGLE]: 'Phim lẻ',
    [MovieTypeEnum.SERIES]: 'Phim bộ',
    [MovieTypeEnum.TV_SHOWS]: 'Chương trình TV',
    [MovieTypeEnum.HOAT_HINH]: 'Hoạt hình',
};

export const movieStatusTranslations = {
    [MovieStatusEnum.ON_GOING]: 'Đang chiếu',
    [MovieStatusEnum.TRAILER]: 'Trailer',
    [MovieStatusEnum.COMPLETED]: 'Đã hoàn thành',
};
