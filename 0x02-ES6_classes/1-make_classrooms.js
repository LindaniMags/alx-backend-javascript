import Classroom from "./0-classroom";

export default function initializeRooms() {
  cls1 = new Classroom(19);
  cls2 = new Classroom(20);
  cls3 = new Classroom(34);
  return [cls1, cls2, cls3];
}
