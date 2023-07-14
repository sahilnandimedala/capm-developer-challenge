namespace golf;
using { User, cuid, managed } from '@sap/cds/common';

entity Rounds : managed {
  key ID : UUID;
  title  : String(111);
  holes : Composition of many Holes on holes.round_ID = $self.ID
  
}

entity Holes : managed {
  key round_ID : UUID;
  key ID : UUID;
  score : Integer;
  par : Integer;
  shots : Composition of many Shots on shots.hole = $self.ID
}

entity Shots {
  key hole : UUID;
  key ID : UUID;
}
