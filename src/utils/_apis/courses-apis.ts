/* eslint-disable no-unused-vars */
import { trackPromise } from "react-promise-tracker";
import Api from "./api";
import {
  CareerPathInterface,
  CourseDetails,
  CoursesReport,
  RoadMapInterface,
  PatchCourseProgressParams,
} from "@/types/courses"; /*  */
import { CoursesContext } from "../types";

export const getCareerPathApi = async (): Promise<CareerPathInterface[]> => {
  try {
    const response = await trackPromise(
      Api({
        method: "get",
        url: "/courses/list/careerpath",
        withCredentials: false,
      }) as Promise<{ data: CareerPathInterface[] }>
    );
    return response.data;
  } catch (e: any) {
    console.error("getAllCareerPathApi error:", e);
    throw e;
  }
};

export const getSingleCareerPathApi = async ({
  careerPathId,
}: {
  careerPathId: string;
}): Promise<CareerPathInterface> => {
  try {
    const response = await trackPromise(
      Api({
        method: "get",
        url: `/courses/careerpath/${careerPathId}`,
        withCredentials: false,
      }) as Promise<{ data: CareerPathInterface }>
    );
    return response.data;
  } catch (e: any) {
    console.error("getSingleCareerPathApi error:", e);
    throw e;
  }
};
export const getRoadMapApi = async (): Promise<RoadMapInterface[]> => {
  try {
    const response = await trackPromise(
      Api({
        method: "get",
        url: "/courses/list/roadmap",
        withCredentials: false,
      }) as Promise<{ data: RoadMapInterface[] }>
    );
    return response.data;
  } catch (e: any) {
    console.error("getRoadMapApi error:", e);
    throw e;
  }
};
export const getSingleRoadMapApi = async ({
  RoadMapId,
}: {
  RoadMapId: string;
}): Promise<RoadMapInterface> => {
  try {
    const response = await trackPromise(
      Api({
        method: "get",
        url: `/courses/roadmap/${RoadMapId}`,
        withCredentials: false,
      }) as Promise<{ data: RoadMapInterface }>
    );
    return response.data;
  } catch (e: any) {
    console.error("getSingleRoadMapApi error:", e);
    throw e;
  }
};

export const getAllCoursesApi = async (): Promise<CoursesContext[]> => {
  try {
    const response = await trackPromise(
      Api({
        method: "get",
        url: "/courses/list/",
        withCredentials: false,
      }) as Promise<{ data: CoursesContext[] }>
    );
    return response.data;
  } catch (e: any) {
    console.error("getAllCoursesApi error:", e);
    throw e;
  }
};

export const getSingleCoursesApi = async ({
  course_id,
}: {
  course_id: string;
}): Promise<CourseDetails> => {
  try {
    const response = await trackPromise(
      Api<CourseDetails>({
        method: "get",
        url: `courses/${course_id}`,
        withCredentials: false,
      })
    );
    return response.data;
  } catch (e: any) {
    console.error("getAllCoursesApi error:", e);
    throw e;
  }
};

export const enrollCoursesApi = async ({ courseId }: { courseId: string }) => {
  try {
    const response = await Api({
      method: "post",
      url: `courses/enroll/${courseId}`,
      withCredentials: false,
    });

    return response;
  } catch (e: any) {
    console.error("enrollCoursesApi error:", e.message);
    throw e;
  }
};
export const enrollRoadMapApi = async ({
  RoadMapId,
}: {
  RoadMapId: string;
}) => {
  try {
    const response = await Api({
      method: "post",
      url: `courses/enroll/roadmap/${RoadMapId}`,
      withCredentials: false,
    });

    return response;
  } catch (e: any) {
    console.error("enrollRoadMapApi error:", e.message);
    throw e;
  }
};

export const enrollCareerPathApi = async ({
  careerPathId,
}: {
  careerPathId: string;
}) => {
  try {
    const response = await Api({
      method: "post",
      url: `courses/enroll/careerpath/${careerPathId}`,
      withCredentials: false,
    });

    return response;
  } catch (e: any) {
    console.error("enrollCareerPathApi error:", e.message);
    throw e;
  }
};

export const getCourseReportApi = async (): Promise<CoursesReport> => {
  try {
    const response = await trackPromise(
      Api({
        method: "get",
        url: "courses/report",
        withCredentials: false,
      }) as Promise<{ data: CoursesReport }>
    );
    return response.data;
  } catch (e: any) {
    console.error("getCourseReportApi error:", e);
    throw e;
  }
};

export const patchCourseProgressApi = async (
  params: PatchCourseProgressParams
): Promise<any> => {
  try {
    const response = await trackPromise(
      Api({
        method: "patch",
        url: `courses/progress/${params.courseId}/${params.materialId}`,
        params: {
          userId: params.userId,
          courseId: params.courseId,
          materialId: params.materialId,
        },
        data: params.material,
        withCredentials: false,
      }) as Promise<{ data: any }>
    );

    return response.data;
  } catch (e: any) {
    console.error("patchCourseProgressApi error:", e);
    throw e;
  }
};
