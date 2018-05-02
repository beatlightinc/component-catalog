class IconLoader {

  public static load(url: string) {
    return new Promise<any>((resolve, reject) => {
        if (IconLoader.icons[url] !== undefined) {
          resolve(IconLoader.icons[url]);
        }

        else if (IconLoader.loadCallbacks[url] !== undefined) {
          resolve(IconLoader.loadCallbacks[url].push(resolve));
        }

        else {
          IconLoader.loadCallbacks[url] = [resolve];
          IconLoader.loadFromServer(url, reject);
        }
    });
  }

  private static icons: any = {};
  private static loadCallbacks: any = {};

  private static loadFromServer(url: string, onError: any) {
    const onSuccess = (response: any) => {
      const data = response.querySelector('svg')[0].outerHTML;
      IconLoader.icons[url] = data;

      // If multiple requests for this icon, resolve them
      IconLoader.loadCallbacks[url].forEach((callback: any) => {
        callback(data);
      });

      delete IconLoader.loadCallbacks[url];
    };

    const requestInit = {
      method: 'GET',
      success: onSuccess,
      error: onError
    };

    const iconRequest = new Request(`/icons/${url}`, requestInit);
    fetch(iconRequest);
  }
}

export default IconLoader;
