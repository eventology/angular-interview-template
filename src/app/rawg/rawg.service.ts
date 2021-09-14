import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RawgGame } from "./rawg-game.interface";
import { RawgListResponse } from "./rawg-list-response.interface";

const BASE_URL = "https://api.rawg.io/api";
const key = "c95ca9de0a4048918ca678918e43415b";

@Injectable({
  providedIn: "root",
})
export class RawgService {
  constructor(private http: HttpClient) {}

  getGameList({
    page = 1,
    search = "",
  }: { page?: number; search?: string } = {}) {
    return this.http.get<RawgListResponse<RawgGame>>(`${BASE_URL}/games`, {
      params: { key, page, search },
    });
  }

  getGame(id: string) {
    return this.http.get<RawgGame>(`${BASE_URL}/games/${id}`, {
      params: { key },
    });
  }
}
