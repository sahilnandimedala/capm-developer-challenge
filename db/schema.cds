namespace golf;
using { User, cuid, managed } from '@sap/cds/common';

entity Rounds : managed {
  key ID : UUID;
  title  : String(111);
  holes : Composition of many Holes on holes.round_ID = $self
  
}

entity Holes {
  key round_ID : Association to Rounds;
  key ID : UUID;
  score : Integer;
  par : Integer;
  shots : Composition of many Shots on shots.hole = $self
}

entity Shots {
  key hole : Association to Holes;
  key ID : UUID;
}
