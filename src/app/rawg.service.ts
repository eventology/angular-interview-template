import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = "API_KEY";

@Injectable({
  providedIn: "root",
})
export class RawgService {
  constructor(private http: HttpClient) {}
}
