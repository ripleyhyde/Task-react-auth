import { makeAutoObservable, observable, action } from "mobx";
import axios from "axios";

class RoomStore {
  rooms = [];

  constructor() {
    makeAutoObservable(this, {
      rooms: observable,
      fetchRoom: action,
      createRoom: action,
      deleteRoom: action,
      updateRoom: action,
    });
  }
  fetchRoom = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-authentication-be.herokuapp.com/rooms"
      );
      this.rooms = response.data;
    } catch (e) {
      console.log(e);
    }
  };
  createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-authentication-be.herokuapp.com/rooms",
        newRoom
      );

      this.rooms.push(response.data);
    } catch (e) {
      alert("cannot create new room");
      console.log(e);
    }
    // to do : call BE to create a room
  };

  deleteRoom = async (id) => {
    try {
      await axios.delete(
        `https://coded-task-authentication-be.herokuapp.com/rooms/${id}`
      );
      const tempRoom = this.rooms.filter((room) => room.id !== id);
      this.rooms = tempRoom;
    } catch (e) {
      alert("cannot delete the room");
    }
    // to do : call BE to delete a room
  };
  updateRoom = async (updatedRoom) => {
    try {
      const response = await axios.put(
        `https://coded-task-authentication-be.herokuapp.com/rooms/${updatedRoom.id}`,
        updatedRoom
      );
      const tempRoom = this.rooms.map((room) =>
        room.id === updatedRoom.id ? response.data : room
      );
      this.rooms = tempRoom;
    } catch (error) {
      console.log(error);
    }
  };
}
const roomStore = new RoomStore();
roomStore.fetchRoom();
export default roomStore;
