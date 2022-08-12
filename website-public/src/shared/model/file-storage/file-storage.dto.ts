export interface FileStorageDto {
  id?: string;
  creationTime?: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  type?: string;
  stopId?: string;
  path?: string;
  fileExtension?: string;
  fileName?: string;
  downloadFileName?: string;
}
