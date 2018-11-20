
    $(document).ready(function() {
        $('.toggles').click(function() {
            $('.toggles').toggleClass('active')
            $('body').toggleClass('night')
        });
    });


    $(document).ready(function() {
        $('.toggle').click(function() {
            $('.toggle').toggleClass('active')
            $('body').toggleClass('night')
        });
    });

    $(document).ready(function() {
        $('.menus').click(function() {
            $('ul').toggleClass('click-menu');
        })
    })

    $(window).on("scroll", function() 
    {
        if($(window).scrollTop()) 
        {
            $('nav').addClass('black');
        }

        else 
        {
            $('nav').removeClass('black');
        }
    });


    $(document).ready(function() {
        var offset = 250;
        var duration = 500;

        $(window).scroll(function() {
            if($(this).scrollTop() > offset) {
                $('.to-top').fadeIn(duration);
            }
        });

        $('.to-top').click(function() {
            $('body').animate({scrollTop: 0}, duration);
        })
    })




    var arrLang = {
        'fr' : {
            'moi' : 'Moi',
            'accueil' : 'Accueil',
            'etudes' : 'Mes études',
            'experiences' : 'Expériences pro',
            'langues' : 'Langages utilisés',
            'modes' : 'Changer mode',
            'bienvenue' : 'Bienvenue sur mon site portfolio',
            'title' : 'Licence Professionnelle Informatique',
            'type' : 'Developpement web, androîd et IOS',
            'title3': '1 ère Année de Brevet de Technicien Supérieur Système Numérique',
            'type3' : 'Informatique et Réseau',
            'title4' : "Terminale STI2D (Sciences et Technologies de l'Industrie et du Développement Durable)",
            'type4' : 'Système Informatique et Numérique',
            'title2' : '2ème Année de Brevet de Technicien Supérieur Système Numérique',
            'description' : "Développeur web Fullstack curieux, motiver et passionner par les nouvelles technologies, j'aime les applications simples, rapides et efficaces. Actuellement en licence professionnelle en alternance à l'IUT 1 de grenoble, je suis déterminer à acquérir des bases solides et devenir le meilleur dans mon domaine qui est l'informatique. Je n'ai pas peur de réléver des défis parce que c'est comme ça que l'on devient meilleur dans ce que l'on fait !",
            'etude' : 'A propos de moi',
            'etude2' : 'Expériences Professionnelles',
            'title5' : 'Département de la Savoie',
            'info5' : 'Développeur Fullstack (web et mobile)',
            'type5' : 'Langages :',
            'title6' : "Orange Unité d'Intervention Alpes (UI ALPES)",
            'info6' : 'Développeur web',
            'type6' : 'Langages :',
            'title7' : 'Alteck Informatique ',
            'info7' : 'Maintenance informatique',
            'type7' : 'Accueil des clients',
            'etude3' : 'Langages utilisés',
            'title8' : 'Mes langages de programmations et Frameworks',
            'info8' : 'Développeur web et mobile (Android et IOS)',
            'type8' : "Langages :",
            'type9' : 'Frameworks:',
            'type10' : 'Outils :',
            'type11' : 'Base des données:'
        },
        
        'en' : {
            'moi': 'Me',
            'accueil' : 'Home',
            'etudes' : 'My studies',
            'experiences' : 'My experiences',
            'langues' : 'Informatics Languages',
            'modes' : 'Change mode',
            'bienvenue' : 'Welcome to my portfolio site',
            'title' : "Bachelor's degree in Computer Science",
            'type' : 'Web development, Android and IOS',
            'title2' : '2nd year of Higher Technician Digital System',
            'type2' : 'Computer and Network',
            'title3': '1 st Year of Higher Technician Digital System',
            'type3' : 'Computer and Network',
            'title4' : 'Terminal STI2D (Science and Technology of Industry and Sustainable Development)',
            'type4' : 'Computer and Digital System',
            'description' : "Fullstack web developer curious, motivate and passionate about new technologies, I like simple, fast and effective applications. Currently in professional license at IUT 1 Grenoble, I am determined to acquire a solid foundation and become the best in my field which is computer science. I'm not afraid to bring up challenges because that's how we become better at what we do!",
            'etude' : 'About me',
            'etude2' : 'professional experiences',
            'title5' : 'Department of Savoy',
            'info5' : 'Fullstack developer (web and mobile)',
            'type5' : 'Languages:',
            'title6' : 'Orange Intervention Unit Alpes (UI ALPES)',
            'info6' : 'Web developer',
            'type6' : 'Languages:',
            'title7' : 'Alteck Informatique',
            'info7' : 'Computer Internship',
            'type7' : 'Customer welcome',
            'etude3' : 'Languages used',
            'title8' : 'My programming languages and Frameworks',
            'info8' : 'Web and mobile developer (Android and IOS)',
            'type8' : 'Languages:',
            'type9' : 'Frameworks:',
            'type10' : 'Tools:',
            'type11' : 'Database :'
        },
        
        'ge' : {
            'moi' : 'Mir',
            'accueil' : 'willkommen',
            'etudes' : 'Meine Studien',
            'experiences' : 'Meine erfahrungen',
            'langues' : 'Verwendete Sprachen',
            'modes' : 'Modus wechseln',
            'bienvenue' : 'Willkommen auf meiner Portfolio-Site',
            'title' : 'Bachelor in Informatik',
            'type' : 'Webentwicklung, Android und IOS',
            'title2' : '2. Jahr des Höheren Technikers Digital System',
            'type2' : 'Computer und Netzwerk',
            'title3': '1. Jahr des Brevet des Höheren Techniker-Digitalsystems',
            'type3' : 'Computer und Netzwerk',
            'title4' : 'Terminal STI2D (Wissenschaft und Technologie der Industrie und nachhaltige Entwicklung)',
            'type4' : 'Computer und digitales System',
            'description' : 'Fullstack-Webentwickler neugierig, motiviert und leidenschaftlich für neue Technologien, ich mag einfache, schnelle und effektive Anwendungen. Ich bin derzeit in der Berufslizenz am IUT 1 Grenoble und bin fest entschlossen, eine solide Grundlage zu erwerben und die beste in meinem Bereich der Informatik zu werden. Ich habe keine Angst vor Herausforderungen, denn so werden wir besser bei dem, was wir tun!',
            'etude' : 'Über mich',
            'etude2' : 'berufliche Erfahrungen',
            'title5' : 'Abteilung von Savoyen',
            'info5' : 'Fullstack-Entwickler (Web und Mobile)',
            'type5' : 'Sprachen:',
            'title6' : 'Orange Interventionseinheit Alpes (UI ALPES)',
            'info6' : 'Webentwickler',
            'type6' : 'Sprachen:',
            'title7' : 'Alteck Informatique',
            'info7' : 'Computerpraktikum',
            'type7' : 'Kunden willkommen',
            'etude3' : 'Verwendete Sprachen',
            'title8' : 'Meine Programmiersprachen und Frameworks',
            'info8' : 'Web- und Mobile-Entwickler (Android und IOS)',
            'type8' : 'Sprachen:',
            'type9' : 'Frameworks:',
            'type10' : 'Werkzeuge:',
            'type11' : 'Datenbank:'
        },
        'cd' : {
            'moi' : 'Ngai',
            'accueil' : 'Ndako',
            'etudes' : 'Kelasi Na Tanga',
            'experiences' : 'Koyeba Kosala',
            'langues' : 'Elobeli Informatique',
            'modes' : 'Balola mode',
            'bienvenue' : 'Boyeyi malamu na site na nga Portfolio',
            'title' : 'Licence ya informatique',
            'type' : 'Kokolisa web, androîd na IOS',
            'title2' : 'Année ya mibale ya Brevet de Technicien Supérieur Système Numérique',
            'type2' : 'Informatique na Réseau',
            'title3': 'Année ya liboso ya Brevet de Technicien Supérieur Système Numérique ',
            'type3' : 'Informatique na Réseau',
            'title4' : "Année ya suka STI2D (Sciences na Technologies ya Industrie na ya Développement Durable)",
            'type4' : 'Système Informatique na Numérique',
            'description' : "Motambwisi web Fullstack nalingaka koyeba pe naza na bolingo ya ba technologies ya sika, na lingaka ba applications ya pete, mbangu pe ya malamu. Na ngonga oyo naza licence ya mosali na alternance na IUT 1 ya grenoble, naza na molende ya kozua ba base ya makasi pe ko koma malamu penza na mosala na nga oyo ezali informatique. Na bangaka te pona kozua makambo yango, pona bongo nde mutu akomaka makasi na oyo azali kosala !",
            'etude' : ' Ko lobelela nga',
            'etude2' : 'Koyeba Kosala',
            'title5' : 'Département ya Savoie',
            'info5' : 'Motambwisi Fullstack (web na mobile)',
            'type5' : 'Elobeli :',
            'title6' : "Orange Unité ya Intervention Alpes (UI ALPES)",
            'info6' : 'Motambwisi web',
            'type6' : 'Elobeli :',
            'title7' : 'Alteck Informatique',
            'info7' : 'Stage ya Informatique',
            'type7' : 'Koyamba ba clients',
            'etude3' : 'Elobeli na salelaka',
            'title8' : 'Elobeli ya Programmations na ba Frameworks',
            'info8' : 'Motambwisi web na mobile (Android na IOS)',
            'type8' : 'Elobeli :',
            'type9' : 'Frameworks:',
            'type10' : 'Bisaleli :',
            'type11' : 'Base ya ba données :'
        }
    };

    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');

            $('.lang').each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });
