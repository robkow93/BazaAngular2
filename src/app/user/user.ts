export class Uzytkownik {

  constructor(
    public id: number,
    public imie: string,
    public nazwisko: string,
    public miejscowosc?: string,
    //public nazwisko: string,
    /*
    public telefon: string,
    public miejscowosc: string,
    public ulica: string,
    public ulicanumer: string,
    public kodpocztowy: string,
    public dataurodzenia: string,
    public ulicamieszkanie?: string, */
  ) {  }

}