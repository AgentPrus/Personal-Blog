import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    DateTime: any;
    I18NLocaleCode: any;
    JSON: any;
    Upload: any;
};

export type AboutMe = {
    __typename?: 'AboutMe';
    about_me_card?: Maybe<Array<Maybe<ComponentAboutProfileCard>>>;
    createdAt?: Maybe<Scalars['DateTime']>;
    feed?: Maybe<ComponentAboutFeed>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutMeAbout_Me_CardArgs = {
    filters?: InputMaybe<ComponentAboutProfileCardFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutMeEntity = {
    __typename?: 'AboutMeEntity';
    attributes?: Maybe<AboutMe>;
    id?: Maybe<Scalars['ID']>;
};

export type AboutMeEntityResponse = {
    __typename?: 'AboutMeEntityResponse';
    data?: Maybe<AboutMeEntity>;
};

export type AboutMeInput = {
    about_me_card?: InputMaybe<Array<InputMaybe<ComponentAboutProfileCardInput>>>;
    feed?: InputMaybe<ComponentAboutFeedInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Article = {
    __typename?: 'Article';
    categories?: Maybe<CategoryRelationResponseCollection>;
    content?: Maybe<Scalars['String']>;
    cover?: Maybe<UploadFileEntityResponse>;
    createdAt?: Maybe<Scalars['DateTime']>;
    excerpt: Scalars['String'];
    locale?: Maybe<Scalars['String']>;
    localizations?: Maybe<ArticleRelationResponseCollection>;
    publicationDate: Scalars['Date'];
    publishedAt?: Maybe<Scalars['DateTime']>;
    slug?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleCategoriesArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleLocalizationsArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleEntity = {
    __typename?: 'ArticleEntity';
    attributes?: Maybe<Article>;
    id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
    __typename?: 'ArticleEntityResponse';
    data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
    __typename?: 'ArticleEntityResponseCollection';
    data: Array<ArticleEntity>;
    meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
    categories?: InputMaybe<CategoryFiltersInput>;
    content?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    excerpt?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    locale?: InputMaybe<StringFilterInput>;
    localizations?: InputMaybe<ArticleFiltersInput>;
    not?: InputMaybe<ArticleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
    publicationDate?: InputMaybe<DateFilterInput>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    slug?: InputMaybe<StringFilterInput>;
    title?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
    categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    content?: InputMaybe<Scalars['String']>;
    cover?: InputMaybe<Scalars['ID']>;
    excerpt?: InputMaybe<Scalars['String']>;
    publicationDate?: InputMaybe<Scalars['Date']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type ArticleRelationResponseCollection = {
    __typename?: 'ArticleRelationResponseCollection';
    data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    contains?: InputMaybe<Scalars['Boolean']>;
    containsi?: InputMaybe<Scalars['Boolean']>;
    endsWith?: InputMaybe<Scalars['Boolean']>;
    eq?: InputMaybe<Scalars['Boolean']>;
    eqi?: InputMaybe<Scalars['Boolean']>;
    gt?: InputMaybe<Scalars['Boolean']>;
    gte?: InputMaybe<Scalars['Boolean']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    lt?: InputMaybe<Scalars['Boolean']>;
    lte?: InputMaybe<Scalars['Boolean']>;
    ne?: InputMaybe<Scalars['Boolean']>;
    not?: InputMaybe<BooleanFilterInput>;
    notContains?: InputMaybe<Scalars['Boolean']>;
    notContainsi?: InputMaybe<Scalars['Boolean']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
    startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
    __typename?: 'Category';
    articles?: Maybe<ArticleRelationResponseCollection>;
    createdAt?: Maybe<Scalars['DateTime']>;
    name: Scalars['String'];
    publishedAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryArticlesArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
    __typename?: 'CategoryEntity';
    attributes?: Maybe<Category>;
    id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
    __typename?: 'CategoryEntityResponse';
    data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
    __typename?: 'CategoryEntityResponseCollection';
    data: Array<CategoryEntity>;
    meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
    articles?: InputMaybe<ArticleFiltersInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<CategoryFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
    publishedAt?: InputMaybe<DateTimeFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
    articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    name?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryRelationResponseCollection = {
    __typename?: 'CategoryRelationResponseCollection';
    data: Array<CategoryEntity>;
};

export type ComponentAboutFeed = {
    __typename?: 'ComponentAboutFeed';
    feed_item?: Maybe<Array<Maybe<ComponentAboutFeedItem>>>;
    id: Scalars['ID'];
};

export type ComponentAboutFeedFeed_ItemArgs = {
    filters?: InputMaybe<ComponentAboutFeedItemFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAboutFeedInput = {
    feed_item?: InputMaybe<Array<InputMaybe<ComponentAboutFeedItemInput>>>;
    id?: InputMaybe<Scalars['ID']>;
};

export type ComponentAboutFeedItem = {
    __typename?: 'ComponentAboutFeedItem';
    date: Scalars['Date'];
    description: Scalars['String'];
    id: Scalars['ID'];
};

export type ComponentAboutFeedItemFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentAboutFeedItemFiltersInput>>>;
    date?: InputMaybe<DateFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentAboutFeedItemFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentAboutFeedItemFiltersInput>>>;
};

export type ComponentAboutFeedItemInput = {
    date?: InputMaybe<Scalars['Date']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
};

export type ComponentAboutProfileCard = {
    __typename?: 'ComponentAboutProfileCard';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    picture?: Maybe<UploadFileEntityResponse>;
    title?: Maybe<Scalars['String']>;
};

export type ComponentAboutProfileCardFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<ComponentAboutProfileCardFiltersInput>>>;
    description?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<ComponentAboutProfileCardFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<ComponentAboutProfileCardFiltersInput>>>;
    title?: InputMaybe<StringFilterInput>;
};

export type ComponentAboutProfileCardInput = {
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    picture?: InputMaybe<Scalars['ID']>;
    title?: InputMaybe<Scalars['String']>;
};

export type DateFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    contains?: InputMaybe<Scalars['Date']>;
    containsi?: InputMaybe<Scalars['Date']>;
    endsWith?: InputMaybe<Scalars['Date']>;
    eq?: InputMaybe<Scalars['Date']>;
    eqi?: InputMaybe<Scalars['Date']>;
    gt?: InputMaybe<Scalars['Date']>;
    gte?: InputMaybe<Scalars['Date']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    lt?: InputMaybe<Scalars['Date']>;
    lte?: InputMaybe<Scalars['Date']>;
    ne?: InputMaybe<Scalars['Date']>;
    not?: InputMaybe<DateFilterInput>;
    notContains?: InputMaybe<Scalars['Date']>;
    notContainsi?: InputMaybe<Scalars['Date']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
    startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    contains?: InputMaybe<Scalars['DateTime']>;
    containsi?: InputMaybe<Scalars['DateTime']>;
    endsWith?: InputMaybe<Scalars['DateTime']>;
    eq?: InputMaybe<Scalars['DateTime']>;
    eqi?: InputMaybe<Scalars['DateTime']>;
    gt?: InputMaybe<Scalars['DateTime']>;
    gte?: InputMaybe<Scalars['DateTime']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    lt?: InputMaybe<Scalars['DateTime']>;
    lte?: InputMaybe<Scalars['DateTime']>;
    ne?: InputMaybe<Scalars['DateTime']>;
    not?: InputMaybe<DateTimeFilterInput>;
    notContains?: InputMaybe<Scalars['DateTime']>;
    notContainsi?: InputMaybe<Scalars['DateTime']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
    alternativeText?: InputMaybe<Scalars['String']>;
    caption?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    contains?: InputMaybe<Scalars['Float']>;
    containsi?: InputMaybe<Scalars['Float']>;
    endsWith?: InputMaybe<Scalars['Float']>;
    eq?: InputMaybe<Scalars['Float']>;
    eqi?: InputMaybe<Scalars['Float']>;
    gt?: InputMaybe<Scalars['Float']>;
    gte?: InputMaybe<Scalars['Float']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    lt?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
    ne?: InputMaybe<Scalars['Float']>;
    not?: InputMaybe<FloatFilterInput>;
    notContains?: InputMaybe<Scalars['Float']>;
    notContainsi?: InputMaybe<Scalars['Float']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
    | AboutMe
    | Article
    | Category
    | ComponentAboutFeed
    | ComponentAboutFeedItem
    | ComponentAboutProfileCard
    | I18NLocale
    | UploadFile
    | UploadFolder
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsUser;

export type I18NLocale = {
    __typename?: 'I18NLocale';
    code?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    name?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
    __typename?: 'I18NLocaleEntity';
    attributes?: Maybe<I18NLocale>;
    id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
    __typename?: 'I18NLocaleEntityResponse';
    data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
    __typename?: 'I18NLocaleEntityResponseCollection';
    data: Array<I18NLocaleEntity>;
    meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    code?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<I18NLocaleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    contains?: InputMaybe<Scalars['ID']>;
    containsi?: InputMaybe<Scalars['ID']>;
    endsWith?: InputMaybe<Scalars['ID']>;
    eq?: InputMaybe<Scalars['ID']>;
    eqi?: InputMaybe<Scalars['ID']>;
    gt?: InputMaybe<Scalars['ID']>;
    gte?: InputMaybe<Scalars['ID']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    lt?: InputMaybe<Scalars['ID']>;
    lte?: InputMaybe<Scalars['ID']>;
    ne?: InputMaybe<Scalars['ID']>;
    not?: InputMaybe<IdFilterInput>;
    notContains?: InputMaybe<Scalars['ID']>;
    notContainsi?: InputMaybe<Scalars['ID']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    contains?: InputMaybe<Scalars['Int']>;
    containsi?: InputMaybe<Scalars['Int']>;
    endsWith?: InputMaybe<Scalars['Int']>;
    eq?: InputMaybe<Scalars['Int']>;
    eqi?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    ne?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<IntFilterInput>;
    notContains?: InputMaybe<Scalars['Int']>;
    notContainsi?: InputMaybe<Scalars['Int']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    contains?: InputMaybe<Scalars['JSON']>;
    containsi?: InputMaybe<Scalars['JSON']>;
    endsWith?: InputMaybe<Scalars['JSON']>;
    eq?: InputMaybe<Scalars['JSON']>;
    eqi?: InputMaybe<Scalars['JSON']>;
    gt?: InputMaybe<Scalars['JSON']>;
    gte?: InputMaybe<Scalars['JSON']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    lt?: InputMaybe<Scalars['JSON']>;
    lte?: InputMaybe<Scalars['JSON']>;
    ne?: InputMaybe<Scalars['JSON']>;
    not?: InputMaybe<JsonFilterInput>;
    notContains?: InputMaybe<Scalars['JSON']>;
    notContainsi?: InputMaybe<Scalars['JSON']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
    startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    /** Change user password. Confirm with the current password. */
    changePassword?: Maybe<UsersPermissionsLoginPayload>;
    createArticle?: Maybe<ArticleEntityResponse>;
    createArticleLocalization?: Maybe<ArticleEntityResponse>;
    createCategory?: Maybe<CategoryEntityResponse>;
    createUploadFile?: Maybe<UploadFileEntityResponse>;
    createUploadFolder?: Maybe<UploadFolderEntityResponse>;
    /** Create a new role */
    createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
    /** Create a new user */
    createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    deleteAboutMe?: Maybe<AboutMeEntityResponse>;
    deleteArticle?: Maybe<ArticleEntityResponse>;
    deleteCategory?: Maybe<CategoryEntityResponse>;
    deleteUploadFile?: Maybe<UploadFileEntityResponse>;
    deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
    /** Delete an existing role */
    deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
    /** Delete an existing user */
    deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    /** Confirm an email users email address */
    emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
    /** Request a reset password token */
    forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
    login: UsersPermissionsLoginPayload;
    multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
    /** Register a user */
    register: UsersPermissionsLoginPayload;
    removeFile?: Maybe<UploadFileEntityResponse>;
    /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
    resetPassword?: Maybe<UsersPermissionsLoginPayload>;
    updateAboutMe?: Maybe<AboutMeEntityResponse>;
    updateArticle?: Maybe<ArticleEntityResponse>;
    updateCategory?: Maybe<CategoryEntityResponse>;
    updateFileInfo: UploadFileEntityResponse;
    updateUploadFile?: Maybe<UploadFileEntityResponse>;
    updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
    /** Update an existing role */
    updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
    /** Update an existing user */
    updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
    upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
    currentPassword: Scalars['String'];
    password: Scalars['String'];
    passwordConfirmation: Scalars['String'];
};

export type MutationCreateArticleArgs = {
    data: ArticleInput;
    locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateArticleLocalizationArgs = {
    data?: InputMaybe<ArticleInput>;
    id?: InputMaybe<Scalars['ID']>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateCategoryArgs = {
    data: CategoryInput;
};

export type MutationCreateUploadFileArgs = {
    data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
    data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
};

export type MutationDeleteArticleArgs = {
    id: Scalars['ID'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteCategoryArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
    id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
    id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
    confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
    email: Scalars['String'];
};

export type MutationLoginArgs = {
    input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
    field?: InputMaybe<Scalars['String']>;
    files: Array<InputMaybe<Scalars['Upload']>>;
    ref?: InputMaybe<Scalars['String']>;
    refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
    input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
    id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
    code: Scalars['String'];
    password: Scalars['String'];
    passwordConfirmation: Scalars['String'];
};

export type MutationUpdateAboutMeArgs = {
    data: AboutMeInput;
};

export type MutationUpdateArticleArgs = {
    data: ArticleInput;
    id: Scalars['ID'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateCategoryArgs = {
    data: CategoryInput;
    id: Scalars['ID'];
};

export type MutationUpdateFileInfoArgs = {
    id: Scalars['ID'];
    info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUploadFileArgs = {
    data: UploadFileInput;
    id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
    data: UploadFolderInput;
    id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
    data: UsersPermissionsRoleInput;
    id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
    data: UsersPermissionsUserInput;
    id: Scalars['ID'];
};

export type MutationUploadArgs = {
    field?: InputMaybe<Scalars['String']>;
    file: Scalars['Upload'];
    info?: InputMaybe<FileInfoInput>;
    ref?: InputMaybe<Scalars['String']>;
    refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
    __typename?: 'Pagination';
    page: Scalars['Int'];
    pageCount: Scalars['Int'];
    pageSize: Scalars['Int'];
    total: Scalars['Int'];
};

export type PaginationArg = {
    limit?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
    Live = 'LIVE',
    Preview = 'PREVIEW',
}

export type Query = {
    __typename?: 'Query';
    aboutMe?: Maybe<AboutMeEntityResponse>;
    article?: Maybe<ArticleEntityResponse>;
    articles?: Maybe<ArticleEntityResponseCollection>;
    categories?: Maybe<CategoryEntityResponseCollection>;
    category?: Maybe<CategoryEntityResponse>;
    i18NLocale?: Maybe<I18NLocaleEntityResponse>;
    i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
    me?: Maybe<UsersPermissionsMe>;
    uploadFile?: Maybe<UploadFileEntityResponse>;
    uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
    uploadFolder?: Maybe<UploadFolderEntityResponse>;
    uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
    usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
    usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
    usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
    usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAboutMeArgs = {
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryArticleArgs = {
    id?: InputMaybe<Scalars['ID']>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryArticlesArgs = {
    filters?: InputMaybe<ArticleFiltersInput>;
    locale?: InputMaybe<Scalars['I18NLocaleCode']>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoriesArgs = {
    filters?: InputMaybe<CategoryFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    publicationState?: InputMaybe<PublicationState>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoryArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocaleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
    filters?: InputMaybe<I18NLocaleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
    filters?: InputMaybe<UploadFolderFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
    filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
    id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
    __typename?: 'ResponseCollectionMeta';
    pagination: Pagination;
};

export type StringFilterInput = {
    and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    contains?: InputMaybe<Scalars['String']>;
    containsi?: InputMaybe<Scalars['String']>;
    endsWith?: InputMaybe<Scalars['String']>;
    eq?: InputMaybe<Scalars['String']>;
    eqi?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gte?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    lt?: InputMaybe<Scalars['String']>;
    lte?: InputMaybe<Scalars['String']>;
    ne?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<StringFilterInput>;
    notContains?: InputMaybe<Scalars['String']>;
    notContainsi?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    notNull?: InputMaybe<Scalars['Boolean']>;
    null?: InputMaybe<Scalars['Boolean']>;
    or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
    __typename?: 'UploadFile';
    alternativeText?: Maybe<Scalars['String']>;
    caption?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    ext?: Maybe<Scalars['String']>;
    formats?: Maybe<Scalars['JSON']>;
    hash: Scalars['String'];
    height?: Maybe<Scalars['Int']>;
    mime: Scalars['String'];
    name: Scalars['String'];
    previewUrl?: Maybe<Scalars['String']>;
    provider: Scalars['String'];
    provider_metadata?: Maybe<Scalars['JSON']>;
    related?: Maybe<Array<Maybe<GenericMorph>>>;
    size: Scalars['Float'];
    updatedAt?: Maybe<Scalars['DateTime']>;
    url: Scalars['String'];
    width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
    __typename?: 'UploadFileEntity';
    attributes?: Maybe<UploadFile>;
    id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
    __typename?: 'UploadFileEntityResponse';
    data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
    __typename?: 'UploadFileEntityResponseCollection';
    data: Array<UploadFileEntity>;
    meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
    alternativeText?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    caption?: InputMaybe<StringFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    ext?: InputMaybe<StringFilterInput>;
    folder?: InputMaybe<UploadFolderFiltersInput>;
    folderPath?: InputMaybe<StringFilterInput>;
    formats?: InputMaybe<JsonFilterInput>;
    hash?: InputMaybe<StringFilterInput>;
    height?: InputMaybe<IntFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    mime?: InputMaybe<StringFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UploadFileFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
    previewUrl?: InputMaybe<StringFilterInput>;
    provider?: InputMaybe<StringFilterInput>;
    provider_metadata?: InputMaybe<JsonFilterInput>;
    size?: InputMaybe<FloatFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    url?: InputMaybe<StringFilterInput>;
    width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
    alternativeText?: InputMaybe<Scalars['String']>;
    caption?: InputMaybe<Scalars['String']>;
    ext?: InputMaybe<Scalars['String']>;
    folder?: InputMaybe<Scalars['ID']>;
    folderPath?: InputMaybe<Scalars['String']>;
    formats?: InputMaybe<Scalars['JSON']>;
    hash?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Int']>;
    mime?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    previewUrl?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    provider_metadata?: InputMaybe<Scalars['JSON']>;
    size?: InputMaybe<Scalars['Float']>;
    url?: InputMaybe<Scalars['String']>;
    width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
    __typename?: 'UploadFileRelationResponseCollection';
    data: Array<UploadFileEntity>;
};

export type UploadFolder = {
    __typename?: 'UploadFolder';
    children?: Maybe<UploadFolderRelationResponseCollection>;
    createdAt?: Maybe<Scalars['DateTime']>;
    files?: Maybe<UploadFileRelationResponseCollection>;
    name: Scalars['String'];
    parent?: Maybe<UploadFolderEntityResponse>;
    path: Scalars['String'];
    pathId: Scalars['Int'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
    filters?: InputMaybe<UploadFolderFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
    filters?: InputMaybe<UploadFileFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
    __typename?: 'UploadFolderEntity';
    attributes?: Maybe<UploadFolder>;
    id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
    __typename?: 'UploadFolderEntityResponse';
    data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
    __typename?: 'UploadFolderEntityResponseCollection';
    data: Array<UploadFolderEntity>;
    meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
    children?: InputMaybe<UploadFolderFiltersInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    files?: InputMaybe<UploadFileFiltersInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UploadFolderFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
    parent?: InputMaybe<UploadFolderFiltersInput>;
    path?: InputMaybe<StringFilterInput>;
    pathId?: InputMaybe<IntFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
    children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    name?: InputMaybe<Scalars['String']>;
    parent?: InputMaybe<Scalars['ID']>;
    path?: InputMaybe<Scalars['String']>;
    pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
    __typename?: 'UploadFolderRelationResponseCollection';
    data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
    __typename?: 'UsersPermissionsCreateRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
    __typename?: 'UsersPermissionsDeleteRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
    identifier: Scalars['String'];
    password: Scalars['String'];
    provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
    __typename?: 'UsersPermissionsLoginPayload';
    jwt?: Maybe<Scalars['String']>;
    user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
    __typename?: 'UsersPermissionsMe';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    email?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    role?: Maybe<UsersPermissionsMeRole>;
    username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
    __typename?: 'UsersPermissionsMeRole';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
    __typename?: 'UsersPermissionsPasswordPayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
    __typename?: 'UsersPermissionsPermission';
    action: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    role?: Maybe<UsersPermissionsRoleEntityResponse>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
    __typename?: 'UsersPermissionsPermissionEntity';
    attributes?: Maybe<UsersPermissionsPermission>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
    action?: InputMaybe<StringFilterInput>;
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
    __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
    data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
    email: Scalars['String'];
    password: Scalars['String'];
    username: Scalars['String'];
};

export type UsersPermissionsRole = {
    __typename?: 'UsersPermissionsRole';
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
    type?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
    filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
    filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
    pagination?: InputMaybe<PaginationArg>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
    __typename?: 'UsersPermissionsRoleEntity';
    attributes?: Maybe<UsersPermissionsRole>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
    __typename?: 'UsersPermissionsRoleEntityResponse';
    data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
    __typename?: 'UsersPermissionsRoleEntityResponseCollection';
    data: Array<UsersPermissionsRoleEntity>;
    meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    description?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    name?: InputMaybe<StringFilterInput>;
    not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
    permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
    type?: InputMaybe<StringFilterInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    type?: InputMaybe<Scalars['String']>;
    users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
    __typename?: 'UsersPermissionsUpdateRolePayload';
    ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
    __typename?: 'UsersPermissionsUser';
    blocked?: Maybe<Scalars['Boolean']>;
    confirmed?: Maybe<Scalars['Boolean']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    email: Scalars['String'];
    provider?: Maybe<Scalars['String']>;
    role?: Maybe<UsersPermissionsRoleEntityResponse>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
    __typename?: 'UsersPermissionsUserEntity';
    attributes?: Maybe<UsersPermissionsUser>;
    id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
    __typename?: 'UsersPermissionsUserEntityResponse';
    data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
    __typename?: 'UsersPermissionsUserEntityResponseCollection';
    data: Array<UsersPermissionsUserEntity>;
    meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
    and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    blocked?: InputMaybe<BooleanFilterInput>;
    confirmationToken?: InputMaybe<StringFilterInput>;
    confirmed?: InputMaybe<BooleanFilterInput>;
    createdAt?: InputMaybe<DateTimeFilterInput>;
    email?: InputMaybe<StringFilterInput>;
    id?: InputMaybe<IdFilterInput>;
    not?: InputMaybe<UsersPermissionsUserFiltersInput>;
    or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
    password?: InputMaybe<StringFilterInput>;
    provider?: InputMaybe<StringFilterInput>;
    resetPasswordToken?: InputMaybe<StringFilterInput>;
    role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
    updatedAt?: InputMaybe<DateTimeFilterInput>;
    username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
    blocked?: InputMaybe<Scalars['Boolean']>;
    confirmationToken?: InputMaybe<Scalars['String']>;
    confirmed?: InputMaybe<Scalars['Boolean']>;
    email?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    resetPasswordToken?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['ID']>;
    username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
    __typename?: 'UsersPermissionsUserRelationResponseCollection';
    data: Array<UsersPermissionsUserEntity>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
    __typename?: 'Query';
    aboutMe?: {
        __typename?: 'AboutMeEntityResponse';
        data?: {
            __typename?: 'AboutMeEntity';
            attributes?: {
                __typename?: 'AboutMe';
                about_me_card?: Array<{
                    __typename?: 'ComponentAboutProfileCard';
                    title?: string | null;
                    description?: string | null;
                    picture?: {
                        __typename?: 'UploadFileEntityResponse';
                        data?: {
                            __typename?: 'UploadFileEntity';
                            attributes?: { __typename?: 'UploadFile'; formats?: any | null } | null;
                        } | null;
                    } | null;
                } | null> | null;
                feed?: {
                    __typename?: 'ComponentAboutFeed';
                    feed_item?: Array<{
                        __typename?: 'ComponentAboutFeedItem';
                        description: string;
                        date: any;
                        id: string;
                    } | null> | null;
                } | null;
            } | null;
        } | null;
    } | null;
};

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_2_Query = {
    __typename?: 'Query';
    articles?: {
        __typename?: 'ArticleEntityResponseCollection';
        data: Array<{
            __typename?: 'ArticleEntity';
            attributes?: { __typename?: 'Article'; title: string } | null;
        }>;
    } | null;
};

export type ArticleQueryVariables = Exact<{
    slug: Scalars['String'];
    locale?: InputMaybe<Scalars['I18NLocaleCode']>;
}>;

export type ArticleQuery = {
    __typename?: 'Query';
    articles?: {
        __typename?: 'ArticleEntityResponseCollection';
        data: Array<{
            __typename?: 'ArticleEntity';
            attributes?: {
                __typename?: 'Article';
                title: string;
                publicationDate: any;
                content?: string | null;
                categories?: {
                    __typename?: 'CategoryRelationResponseCollection';
                    data: Array<{
                        __typename?: 'CategoryEntity';
                        attributes?: { __typename?: 'Category'; name: string } | null;
                    }>;
                } | null;
                cover?: {
                    __typename?: 'UploadFileEntityResponse';
                    data?: {
                        __typename?: 'UploadFileEntity';
                        attributes?: { __typename?: 'UploadFile'; formats?: any | null } | null;
                    } | null;
                } | null;
            } | null;
        }>;
    } | null;
};

export type ArticlesQueryVariables = Exact<{
    locale: Scalars['I18NLocaleCode'];
}>;

export type ArticlesQuery = {
    __typename?: 'Query';
    articles?: {
        __typename?: 'ArticleEntityResponseCollection';
        data: Array<{
            __typename?: 'ArticleEntity';
            attributes?: {
                __typename?: 'Article';
                title: string;
                excerpt: string;
                slug?: string | null;
                publicationDate: any;
                categories?: {
                    __typename?: 'CategoryRelationResponseCollection';
                    data: Array<{
                        __typename?: 'CategoryEntity';
                        attributes?: { __typename?: 'Category'; name: string } | null;
                    }>;
                } | null;
                cover?: {
                    __typename?: 'UploadFileEntityResponse';
                    data?: {
                        __typename?: 'UploadFileEntity';
                        attributes?: { __typename?: 'UploadFile'; formats?: any | null } | null;
                    } | null;
                } | null;
            } | null;
        }>;
    } | null;
};

export const Document = gql`
    {
        articles {
            data {
                attributes {
                    title
                }
            }
        }
    }
`;

export const ArticleDocument = gql`
    query Article($slug: String!, $locale: I18NLocaleCode) {
        articles(filters: { slug: { eq: $slug } }, locale: $locale) {
            data {
                attributes {
                    title
                    publicationDate
                    categories {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                    content
                    cover {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const ArticlesDocument = gql`
    query Articles($locale: I18NLocaleCode!) {
        articles(locale: $locale, sort: "publicationDate:desc") {
            data {
                attributes {
                    title
                    excerpt
                    slug
                    publicationDate
                    categories {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                    cover {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
