import { buildFormData } from "../../common/utils/buildFormData";
import { AddFilePayload } from "../payloads/AddFilePayload";
import { PresignedUrlPayload } from "../payloads/PresignedUrlPayload";
import { UploadFilePayload } from "../payloads/UploadFilePayload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPresignedUrl = async (payload: PresignedUrlPayload) => {
  const formData = buildFormData(payload);

  const response = await fetch(`${API_URL}/api/files/get-upload-url/`, {
    body: formData,
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to get presigned url");
  }

  return response.json();
};

export const uploadFile = async (payload: UploadFilePayload) => {
  const uploadFileResponse = await fetch(payload.presignedUrl, {
    body: payload.file,
    headers: {
      "Content-Type": payload.file.type,
    },
    method: "PUT",
  });

  if (!uploadFileResponse.ok) {
    throw new Error("Failed to upload file");
  }

  return { success: true };
};

export const addFile = async (payload: AddFilePayload) => {
  const formData = buildFormData(payload);
  const addFileResponse = await fetch(`${API_URL}/api/files/add/`, {
    body: formData,
    credentials: "include",
    method: "POST",
  });

  if (!addFileResponse.ok) {
    throw new Error("Failed to add file");
  }

  return { success: true };
};
