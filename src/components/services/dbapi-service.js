export default class DbApi {

    _apiBase = 'https://swapi.py4e.com/api';


    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}' +
            ', received ${res.status}`);
        }

        return await res.json();
    }


    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPerson);
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformPerson);
    }


    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }


    _transformPerson = (person) => {
        return {
          id: this._extractId(person),
          name: person.name,
          gender: person.gender,
          birthYear: person.birth_year,
          eyeColor: person.eye_color
        }
    }
}