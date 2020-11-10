import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  // This is a Giphy API Key I created. Create your own at https://developers.giphy.com/dashboard/?create=true.
  giphyApi = '//api.giphy.com/v1/gifs/search?api_key=61BtMvu7FV4OvBBUqEC2GFf3j9src9J9&limit=1&q=';

  constructor(public httpClient: HttpClient) {
  }

  get(searchTerm): any {
    const apiLink = this.giphyApi + searchTerm;
    return this.httpClient.get(apiLink).pipe(map((response: any) => {
      if (response.data.length > 0) {
        return response.data[0].images.original.url;
      } else {
        return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404
      }
    }));
  }
}
