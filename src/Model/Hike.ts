import { Step } from './Step';

export class Hike{
  private _name: String;
  private _length: Number;
  private _duration: String;
  private _incline: Number;
  private _difficulty: String;
  private _color: String;
  private _description: String;
  private _active: Boolean;
  private _listStep: Array<Step>;
  private _mark: Array<Number>;
  private _adr: String;
  private _path: String;
  private _stepCheckpoint: Array<Step>;

  constructor(name: String,
              length: Number,
              duration: String,
              incline: Number,
              difficulty: String,
              color: String,
              description: String,
              active: Boolean,
              mark: number,
              adr: String,
              path: String,
              step: Array<Step> ) {
    this._name = name;
    this._length = length;
    this._duration = duration;
    this._incline = incline;
    this._difficulty = difficulty;
    this._color = color;
    this._description = description;
    this._active = active;
    this._listStep = step;
    this._mark = new Array(mark);
    this._adr = adr;
    this._path = path;
    this._stepCheckpoint = this.prepareStepCheckPoint(step);
  }

  prepareStepCheckPoint(step: Array<Step>){
    let stepCk: Array<Step> = [];
    step.forEach((elt) => {
      if(elt["_name"] != ""){
        stepCk.push(elt);
      }
    });
    return stepCk;
  }

  get length(){
    return '~' + this._length + 'Km';
  }

  get active(){
    return this._active;
  }

  get name(){
    return this._name;
  }

  get duration(){
    return '~' + this._duration;
  }

  get incline(){
    return "~" + this._incline + "m";
  }

  get color(){
    return this._color;
  }

  get description(){
    return this._description;
  }

  get difficulty(){
    return this._difficulty;
  }

  get formatedLength(){
    return this._length + " km";
  }

  set active(active: Boolean){
    this._active = active;
  }

  get listStep(){
    return this._listStep;
  }

  get mark(){
    return this._mark;
  }

  get adr(){
    return this._adr;
  }

  get path(){
    return this._path;
  }

  get stepCheckpoint(){
    return this._stepCheckpoint;
  }
}
