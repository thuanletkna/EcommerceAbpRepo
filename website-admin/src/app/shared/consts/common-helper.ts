export class CommonHelper {
    static newId(): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
  
    static downloadFile(url: string, fileName: string) {
      let a = document.getElementById('link-download') as HTMLAnchorElement;
      if (!a) {
          a = document.createElement('a');
          a.id = 'link-download';
      }
      a.style.display = 'none';
      a.href = url;
      // the filename you want
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  
    static checkFileIsImage(fileName: string) {
      const validExtensions = [".jpg", ".bmp", ".gif", ".png", ".jpeg"];
  
      for(let i = 0; i < validExtensions.length; i++) {
        if ((fileName || '').toLowerCase().endsWith(validExtensions[i])) {
          return true;
        }
      }
  
      return false;
    }
  
    static checkFileIsVideo(fileName: string) {
      const validExtensions = [".avi", ".m4v", ".mp4", ".mkv"];
  
      for(let i = 0; i < validExtensions.length; i++) {
        if ((fileName || '').toLowerCase().endsWith(validExtensions[i])) {
          return true;
        }
      }
  
      return false;
    }
  
    static checkFileIsPDF(fileName: string) {
      const validExtensions = [".pdf"];
  
      for(let i = 0; i < validExtensions.length; i++) {
        if ((fileName || '').toLowerCase().endsWith(validExtensions[i])) {
          return true;
        }
      }
  
      return false;
    }
  }