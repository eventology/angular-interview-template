import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const BASE_URL = "https://api.rawg.io/api";
const key = "API_KEY";

@Injectable({
  providedIn: "root",
})
export class RawgService {
  constructor(private http: HttpClient) {}
  getGameList({ page = 1, search = "" }: { page?: number; search?: string }) {
    return this.http.get(`${BASE_URL}/games`, {
      params: { key, page, search },
    });
  }

  getGame(id: string) {
    return this.http.get(`${BASE_URL}/games/${id}`, { params: { key } });
  }
}
