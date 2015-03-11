(function() {

  // -- Normalmente esto debe venir de un API REST en formato JSON -------------

  var empleados = [{
    "id": 1,
    "firstName": "Laya",
    "lastName": "Dueñas",
    "fullName": "Laya Dueñas",
    "managerId": 0,
    "managerName": "",
    "reports": 3,
    "title": "CEO",
    "department": "Corporate",
    "cellPhone": "773 506 253",
    "email": "LayaDueasGranados@jourrapide.com",
    "city": "Madrid, ES",
    "pic": "empleado01.png",
    "twitterId": "@layaduenas",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 2,
    "firstName": "Astryd",
    "lastName": "Valles",
    "fullName": "Astryd Valles",
    "managerId": 1,
    "managerName": "Laya Dueñas",
    "reports": 2,
    "title": "CMO",
    "department": "Marketing",
    "cellPhone": "608 083 642",
    "email": "strydVallesPacheco@jourrapide.com",
    "city": "Madrid, ES",
    "pic": "empleado02.png",
    "twitterId": "@astryd",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 3,
    "firstName": "Shantell",
    "lastName": "Meza",
    "fullName": "Shantell Meza",
    "managerId": 1,
    "managerName": "Laya Dueñas",
    "reports": 0
    "title": "CFO",
    "department": "Corporate",
    "cellPhone": "786 042 170",
    "email": "ShantellMezaZapata@rhyta.com",
    "city": "Madrid, ES",
    "pic": "empleado03.png",
    "twitterId": "@shantell",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 4,
    "firstName": "Sergio",
    "lastName": "Ocampo",
    "fullName": "Sergio Ocampo",
    "managerId": 1,
    "managerName": "Laya Dueñas",
    "reports": 4,
    "title": "CTO",
    "department": "Engineering",
    "cellPhone": "771 611 317",
    "email": "ServioOcampoGaona@rhyta.com",
    "city": "Córdoba, ES",
    "pic": "empleado04.png",
    "twitterId": "@sergiocampo",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 5,
    "firstName": "Ares",
    "lastName": "Jimenez",
    "fullName": "Ares Jimenez",
    "managerId": 2,
    "managerName": "Astryd Valles",
    "reports": 0,
    "title": "Art Director",
    "department": "Marketing",
    "cellPhone": "623 429 042",
    "email": "AresJimnezTrrez@teleworm.us",
    "city": "Madrid, ES",
    "pic": "empleado05.png",
    "twitterId": "@aresjim",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 6,
    "firstName": "Marta",
    "lastName": "Pérez",
    "fullName": "Marta Pérez",
    "managerId": 4,
    "mangerName": "Sergio Ocampo",
    "reports": 0,
    "title": "Frontend Dev",
    "department": "Engineering",
    "cellPhone": "743 972 334",
    "email": "MahaRamnPeres@armyspy.com",
    "city": "Albacete, ES",
    "pic": "empleado06.png",
    "twitterId": "@martaperez",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 7,
    "firstName": "Ellen",
    "lastName": "Balderas",
    "fullName": "Ellen Balderas",
    "managerId": 2,
    "managerName": "Astryd Valles",
    "reports": 0,
    "title": "Digital Strategy",
    "department": "Marketing",
    "cellPhone": "714 408 996",
    "email": "EllenBalderasNevarez@teleworm.us",
    "city": "Barcelona, ES",
    "pic": "empleado07.png",
    "twitterId": "@ellen",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 8,
    "firstName": "Cinthia",
    "lastName": "Valentin",
    "fullName": "Cinthia Valentín",
    "managerId": 4,
    "mangerName": "Sergio Ocampo",
    "reports": 0,
    "title": "Backend Dev",
    "department": "Engineering",
    "cellPhone": "606 361 011",
    "email": "ClidiaValentnBarragn@armyspy.com",
    "city": "Madrid, ES",
    "pic": "empleado08.png",
    "twitterId": "@cintiq",
    "blog": "http://carlosazaustre.es"
  },
  {
    "id": 9,
    "firstName": "Bernd",
    "lastName": "Jung",
    "fullName": "Bernd Jung",
    "managerId": 4,
    "mangerName": "Sergio Ocampo",
    "reports": 0,
    "title": "DevOps Engineer",
    "department": "Engineering",
    "cellPhone": "686 214 566",
    "email": "BerndJung@teleworm.us",
    "city": "Munich, ALE",
    "pic": "empleado09.png",
    "twitterId": "@berndjung",
    "blog": "http://carlosazaustre.es"
  }];

  var findById = function(id) {
    var empleado = null;
    var l = empleados.length;
    var i;

    for(i=0; i<l; i++) {
      if(empleados[i].id == id) {
        empleado = empleados[i];
        break;
      }
    }
    return empleado;
  };

  // ---------------------------------------------------------------------------

  angular
    .module('directorio.services', [])
    .factory('Empleado', Empleado);


  function Empleado() {
    return {
      query: function() {
        return empleados;
      },
      get: function(empleado) {
        return findById(parseInt(empleado));
      }
    };
  }

})();
