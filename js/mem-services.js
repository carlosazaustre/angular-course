(function() {

  // -- Normalmente esto debe venir de un API REST en formato JSON -------------

  var empleados = [{
    "id": 1,
    "firstName": "Laya",
    "lastName": "Dueñas",
    "fullName": "Laya Dueñas",
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
    "title": "CMO",
    "department": "Corporate",
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
    "title": "CTO",
    "department": "Corporate",
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
    "title": "Art Director",
    "department": "Corporate",
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
    "title": "Frontend Dev",
    "department": "Corporate",
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
    "title": "Digital Strategy",
    "department": "Corporate",
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
    "title": "Backend Dev",
    "department": "Corporate",
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
    "title": "DevOps Engineer",
    "department": "Corporate",
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
        return findById(parseInt(empleado.empleadoId));
      }
    };
  }

})();
