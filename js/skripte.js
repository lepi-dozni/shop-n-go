async function getData() {
    const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
    const data = await response.text();
    
    const name_row = data.split('\n')

    const rows = data.split('\n').slice(1)

    var counter = 0;

    var red = 0;

    
    // KREIRANJE HTML ELEMENATA ZA ARTIKLE
    rows.forEach(element => {
        const row = element.split(';')
        const  kategorija = row[0]
        const sifra_artikla = row[1]
        const naziv = row[2]
        const stara_cena = row[3]
        const nova_cena = row[4]
        const popust = row[5]
        const url = ''
        const trajanje = row[6]
        const vazenje = row[7]

      if(counter % 4 == 0 || counter == 0) {

        if(kategorija == '5') {
              
              var tabela_row = document.createElement('div') 
              tabela_row.setAttribute('class', 'proizvodi-row')
              var row_id = 'proizvodi-row-' + red
              tabela_row.setAttribute('id', row_id)
              // '<div class="proizvodi-row" id="proizvodi-row-' + counter + '"</div>'
                //  console.log(tabela_row)
              document.getElementById('tabela-proizvoda').append(tabela_row)

              var cell = document.createElement('div')
              cell.setAttribute('class', 'prozivodi-cell')
              cell.setAttribute('id', sifra_artikla)
              
           
            //   var link = document.createElement('a')
            //   var homepage = 'https://maxi.sales-snap.com/page/preview/20'
            //   link.setAttribute('href', homepage)
            //   link.setAttribute('target', '_self')
            //   link.setAttribute('id', 'link-' + counter)

              var razmak = document.createElement('br')

              var slika = document.createElement('img')
              slika.setAttribute('src', url)
              slika.setAttribute('id', 'slika-' + counter)

            //   link.append(slika)

              var naziv_1 = document.createElement('div')
              naziv_1.setAttribute('id', 'naziv-' + counter)
              naziv_1.setAttribute('class', 'naziv-proizvoda')
              
              naziv_1.innerHTML = naziv

              var stara_cena_1 = document.createElement('div')
              stara_cena_1.setAttribute('id', 'stara-cena-' + counter)
              var stara_cena_tekst = stara_cena.split('.')
              
              if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
              else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

            //   var nova_cena_1 = document.createElement('div')
            //   nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
            //   var nova_cena_tekst = nova_cena.split('.')
            //   if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
            //   else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

            //   var popust_1 = document.createElement('div')
            //   popust_1.setAttribute('id', 'popust-' + counter)
            //   popust_1.innerHTML = popust


            //   cell.append(link)
            //   cell.append(naziv_1)
            //   cell.append(stara_cena_1)
            //   cell.append(nova_cena_1)
            //   cell.append(popust_1)

              var inner_cell_1 = document.createElement('div')
              inner_cell_1.setAttribute('class', 'div-inside')
              inner_cell_1.append(slika)

            //   var popust_container = document.createElement('div')
            //   popust_container.setAttribute('class', 'crveni-krug')
              inner_cell_1.append(naziv_1)
            //   popust_container.append(popust_1)

              
            //   inner_cell_1.append(popust_container)

            
            var inner_cell_2 = document.createElement('div')
            inner_cell_2.setAttribute('class', 'div-inside')
            // inner_cell_2.append(naziv_1)

            var zuti_cenovnik = document.createElement('div')
            zuti_cenovnik.setAttribute('class', 'zuti-cenovnik plava-cena')

            var cenovnik_left = document.createElement('div')
            cenovnik_left.setAttribute('class', 'cenovnik-left')
            cenovnik_left.append(stara_cena_1)

            // var cenovnik_right = document.createElement('div')
            // cenovnik_right.setAttribute('class', 'cenovnik-right')
            // cenovnik_right.append(stara_cena_1)

            zuti_cenovnik.append(cenovnik_left)
            // zuti_cenovnik.append(cenovnik_right)

            inner_cell_2.append(zuti_cenovnik)


              var outer_cell = document.createElement('div')
              outer_cell.setAttribute('class', 'slicica-div')
              outer_cell.append(inner_cell_1)
              outer_cell.append(inner_cell_2)
            //   outer_cell.append(cell)

            var outer_outer_cell = document.createElement('div')
            outer_outer_cell.setAttribute('class', 'spoljni-div')
            outer_outer_cell.setAttribute('id', sifra_artikla)
            outer_outer_cell.append(outer_cell)


            
                var rok = document.createElement('div')
                rok.setAttribute('class', 'trajanje')
                if(trajanje != undefined) rok.append(trajanje)
                outer_outer_cell.append(rok)
                
                var lokacija = document.createElement('div')
                lokacija.setAttribute('class', 'lokacija')
                if(vazenje != undefined) lokacija.append(vazenje)
                outer_outer_cell.append(lokacija)
            // console.log(vazenje)

            tabela_row.append(outer_outer_cell)

              red++;


        } else {

          
          var tabela_row = document.createElement('div') 
          tabela_row.setAttribute('class', 'proizvodi-row')
          var row_id = 'proizvodi-row-' + red
          tabela_row.setAttribute('id', row_id)
          document.getElementById('tabela-proizvoda').append(tabela_row)

          var cell = document.createElement('div')
          cell.setAttribute('class', 'prozivodi-cell')
          cell.setAttribute('id', sifra_artikla)

          var razmak = document.createElement('br')

          var slika = document.createElement('img')
          slika.setAttribute('src', url)
          slika.setAttribute('id', 'slika-' + counter)

          var naziv_1 = document.createElement('div')
          naziv_1.setAttribute('id', 'naziv-' + counter)
          naziv_1.setAttribute('class', 'naziv-proizvoda')

          naziv_1.innerHTML = naziv

          var stara_cena_1 = document.createElement('div')
          stara_cena_1.setAttribute('id', 'stara-cena-' + counter)
          stara_cena_1.setAttribute('data-id', stara_cena)
          var stara_cena_tekst = stara_cena.split('.')
          
          if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
          else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

          var nova_cena_1 = document.createElement('div')
          nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
          nova_cena_1.setAttribute('data-id', nova_cena)
          var nova_cena_tekst = nova_cena.split('.')
          if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
          else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

          
          var popust_1 = document.createElement('div')
          popust_1.setAttribute('id', 'popust-' + counter)
          popust_1.innerHTML = popust


          var inner_cell_1 = document.createElement('div')
          inner_cell_1.setAttribute('class', 'div-inside')
          inner_cell_1.append(slika)

          var popust_container = document.createElement('div')
          popust_container.setAttribute('class', 'crveni-krug')
          inner_cell_1.append(naziv_1)
          popust_container.append(popust_1)

          if(popust == '0%') popust_container.style.display = 'none'
          
          inner_cell_1.append(popust_container)

        
          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(nova_cena_1)

          var cenovnik_right = document.createElement('div')
          cenovnik_right.setAttribute('class', 'cenovnik-right')
          cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


          var outer_cell = document.createElement('div')
          outer_cell.setAttribute('class', 'slicica-div')
          outer_cell.append(inner_cell_1)
          outer_cell.append(inner_cell_2)
        //   outer_cell.append(cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)


          var rok = document.createElement('div')
          rok.setAttribute('class', 'trajanje')
          
          if(trajanje != undefined) rok.append(trajanje)
          outer_outer_cell.append(rok)
            
          var lokacija = document.createElement('div')
          lokacija.setAttribute('class', 'lokacija')
          
          if(vazenje != undefined) lokacija.append(vazenje)
          outer_outer_cell.append(lokacija)


          tabela_row.append(outer_outer_cell)


          // KALKULATOR START
          var kalkulator = document.createElement('div')
          kalkulator.setAttribute('class', 'kalkulator')
          
          
          var selektor_kalkulatora = document.createElement('div')
          selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
          
          var cekboks = document.createElement('input')
          cekboks.setAttribute('class','cekboks-kalkulatora')
          cekboks.setAttribute('type', 'checkbox')
          
          var span_cekboks = document.createElement('span')
          span_cekboks.setAttribute('class', 'checkmark')
          
          var telo_kalkulatora = document.createElement('div')
          telo_kalkulatora.setAttribute('class','telo-kalkulatora')
          telo_kalkulatora.setAttribute('style', 'display:none;')
          
          var minus_dugme = document.createElement('button')
          minus_dugme.setAttribute('class','decrease')
          minus_dugme.innerHTML = '-'
          
          var kolicina = document.createElement('span')
          kolicina.setAttribute('class', 'kolicina')
          kolicina.innerHTML = '0'
          
          var plus_dugme = document.createElement('button')
          plus_dugme.setAttribute('class','increase')
          plus_dugme.innerHTML = '+'
          
          var iznos_popusta = document.createElement('span')
          iznos_popusta.setAttribute('class', 'popust-artikal')
          iznos_popusta.setAttribute('style', 'display:none')
          iznos_popusta.innerHTML = '0'
          
          telo_kalkulatora.append(minus_dugme)
          telo_kalkulatora.append(kolicina)
          telo_kalkulatora.append(plus_dugme)
          telo_kalkulatora.append(iznos_popusta)
          
          selektor_kalkulatora.append(cekboks)
          selektor_kalkulatora.append(span_cekboks)
          // selektor_kalkulatora.append(telo_kalkulatora)
          kalkulator.append(selektor_kalkulatora)
          
          outer_outer_cell.prepend(kalkulator)
          outer_outer_cell.append(telo_kalkulatora)
          
          // KALKULATOR END

          red++;
          
          // PROMO BANERI I MOBILE NEWSLETTER
          if(counter == 12) {
            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
            // var row_id = 'promo-banner'
            // tabela_row.setAttribute('id', row_id)
            tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="plava-cena" target="_self"><img src="" class="promo-banner"></a></div>'
            document.getElementById('tabela-proizvoda').append(tabela_row)
          } else if(counter == 4) {
            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row mobile-newsletter')
            // var row_id = 'mobile-newsletter'
            // tabela_row.setAttribute('id', row_id)
            var njuzleter_wrapper = document.createElement('div')
            njuzleter_wrapper.setAttribute('class','mobile-newsletter-wrapper')

            

            var njuzleter = document.createElement('script')
            njuzleter.setAttribute('src', 'https://maxi.sales-snap.com/form/generate.js?id=6')

            njuzleter_wrapper.append(njuzleter)
            tabela_row.append(njuzleter_wrapper)
            

            document.getElementById('tabela-proizvoda').append(tabela_row)
          } else if(counter == 0) {
            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
            // var row_id = 'promo-banner'
            // tabela_row.setAttribute('id', row_id)
            tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="javascript:void(0)" onclick="getMobileOperatingSystem()"><img src="https://maxi.sales-snap.com/asset/1592:moj-maxiloyalty-02png" class="promo-banner" ></a></div>'
            document.getElementById('tabela-proizvoda').append(tabela_row)
          }
        }
          
        
      } else {

        if(kategorija == '5') {
          var cell = document.createElement('div')
          cell.setAttribute('class', 'prozivodi-cell')
          cell.setAttribute('id', sifra_artikla)


        //   var link = document.createElement('a')
        //   var homepage = 'https://maxi.sales-snap.com/page/preview/20'
        //   link.setAttribute('href', homepage)
        //   link.setAttribute('target', '_self')
        //   link.setAttribute('id', 'link-' + counter)

          var razmak = document.createElement('br')

          var slika = document.createElement('img')
          slika.setAttribute('src', url)
          slika.setAttribute('id', 'slika-' + counter)

        //   link.append(slika)

          var naziv_1 = document.createElement('div')
          naziv_1.setAttribute('id', 'naziv-' + counter)
          naziv_1.setAttribute('class', 'naziv-proizvoda')
          naziv_1.innerHTML = naziv

          var stara_cena_1 = document.createElement('div')
          stara_cena_1.setAttribute('id', 'stara-cena-' + counter)
          var stara_cena_tekst = stara_cena.split('.')
          if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
          else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

        //   var nova_cena_1 = document.createElement('div')
        //   nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
        //   var nova_cena_tekst = nova_cena.split('.')
        //   if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
        //   else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

        //   var popust_1 = document.createElement('div')
        //   popust_1.setAttribute('id', 'popust-' + counter)
        //   popust_1.innerHTML = popust


          var inner_cell_1 = document.createElement('div')
          inner_cell_1.setAttribute('class', 'div-inside')
          inner_cell_1.append(slika)

          //   var popust_container = document.createElement('div')
          //   popust_container.setAttribute('class', 'crveni-krug')
          //   inner_cell_1.append(naziv_1)
          //   popust_container.append(popust_1)

            
          //   inner_cell_1.append(popust_container)
            inner_cell_1.append(naziv_1)
          
          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik plava-cena')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(stara_cena_1)

          // var cenovnik_right = document.createElement('div')
          // cenovnik_right.setAttribute('class', 'cenovnik-right')
          // cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          // zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

          //   tabela_row.append(outer_cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)

          // tabela_row.append(outer_outer_cell)


          var rok = document.createElement('div')
              rok.setAttribute('class', 'trajanje')
              if(trajanje != undefined) rok.append(trajanje)
              outer_outer_cell.append(rok)
              
              var lokacija = document.createElement('div')
              lokacija.setAttribute('class', 'lokacija')
              if(vazenje != undefined) lokacija.append(vazenje)
              outer_outer_cell.append(lokacija)
              
              // console.log(vazenje)
              
          var query = 'proizvodi-row-' + (red - 1)

            

            document.getElementById(query).append(outer_outer_cell)


        } else {
          var cell = document.createElement('div')
          cell.setAttribute('class', 'prozivodi-cell')
          cell.setAttribute('id', sifra_artikla)

          var razmak = document.createElement('br')

          var slika = document.createElement('img')
          slika.setAttribute('src', url)
          slika.setAttribute('id', 'slika-' + counter)

          var naziv_1 = document.createElement('div')
          naziv_1.setAttribute('id', 'naziv-' + counter)
          naziv_1.setAttribute('class', 'naziv-proizvoda')
          naziv_1.innerHTML = naziv

          var stara_cena_1 = document.createElement('div')
          stara_cena_1.setAttribute('id', 'stara-cena-' + counter)
          stara_cena_1.setAttribute('data-id', stara_cena)
        
          var stara_cena_tekst = stara_cena.split('.')
          if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
          else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

          var nova_cena_1 = document.createElement('div')
          nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
                  nova_cena_1.setAttribute('data-id', nova_cena)
          var nova_cena_tekst = nova_cena.split('.')
          if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
          else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

          var popust_1 = document.createElement('div')
          popust_1.setAttribute('id', 'popust-' + counter)
          popust_1.innerHTML = popust


          var inner_cell_1 = document.createElement('div')
          inner_cell_1.setAttribute('class', 'div-inside')
          inner_cell_1.append(slika)

          var popust_container = document.createElement('div')
          popust_container.setAttribute('class', 'crveni-krug')
          inner_cell_1.append(naziv_1)
          popust_container.append(popust_1)

          if(popust == '0%') popust_container.style.display = 'none'
          
          inner_cell_1.append(popust_container)
          //   inner_cell_1.append(naziv_1)
          
          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(nova_cena_1)

          var cenovnik_right = document.createElement('div')
          cenovnik_right.setAttribute('class', 'cenovnik-right')
          cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


          var outer_cell = document.createElement('div')
          outer_cell.setAttribute('class', 'slicica-div')
          outer_cell.append(inner_cell_1)
          outer_cell.append(inner_cell_2)
        //   outer_cell.append(cell)

        //   tabela_row.append(outer_cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)
        
        

        // tabela_row.append(outer_outer_cell)


          var rok = document.createElement('div')
          rok.setAttribute('class', 'trajanje')
          if(trajanje != undefined) rok.append(trajanje)
          outer_outer_cell.append(rok)
            
          var lokacija = document.createElement('div')
          lokacija.setAttribute('class', 'lokacija')
          if(vazenje != undefined) lokacija.append(vazenje)
          outer_outer_cell.append(lokacija)
            
            // console.log(vazenje)
            
          var query = 'proizvodi-row-' + (red - 1)

          document.getElementById(query).append(outer_outer_cell)
        
        
          // KALKULATOR START
          var kalkulator = document.createElement('div')
          kalkulator.setAttribute('class', 'kalkulator')
          
          
          var selektor_kalkulatora = document.createElement('div')
          selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
          
          var cekboks = document.createElement('input')
          cekboks.setAttribute('class','cekboks-kalkulatora')
          cekboks.setAttribute('type', 'checkbox')
          
          var span_cekboks = document.createElement('span')
          span_cekboks.setAttribute('class', 'checkmark')
          
          var telo_kalkulatora = document.createElement('div')
          telo_kalkulatora.setAttribute('class','telo-kalkulatora')
          telo_kalkulatora.setAttribute('style', 'display:none;')
          
          var minus_dugme = document.createElement('button')
          minus_dugme.setAttribute('class','decrease')
          minus_dugme.innerHTML = '-'
          
          var kolicina = document.createElement('span')
          kolicina.setAttribute('class', 'kolicina')
          kolicina.innerHTML = '0'
          
          var plus_dugme = document.createElement('button')
          plus_dugme.setAttribute('class','increase')
          plus_dugme.innerHTML = '+'
          
          var iznos_popusta = document.createElement('span')
          iznos_popusta.setAttribute('class', 'popust-artikal')
          iznos_popusta.setAttribute('style', 'display:none')
          iznos_popusta.innerHTML = '0'
          
          telo_kalkulatora.append(minus_dugme)
          telo_kalkulatora.append(kolicina)
          telo_kalkulatora.append(plus_dugme)
          telo_kalkulatora.append(iznos_popusta)
          
          selektor_kalkulatora.append(cekboks)
          selektor_kalkulatora.append(span_cekboks)
          // selektor_kalkulatora.append(telo_kalkulatora)
          kalkulator.append(selektor_kalkulatora)
          
          outer_outer_cell.prepend(kalkulator)
          outer_outer_cell.append(telo_kalkulatora)
          
          // KALKULATOR END
        }



      }
      counter++
    });
}   

// async function getDataSidebar() {

//     const response = await fetch('tabele/sidebar_artikli.csv', {cache:"no-store"});
//     const data = await response.text();
    
//     var counter = 1

//     const rows = data.split('\n').slice(1)
    
    
//     rows.forEach(element => {
//       const row = element.split(';')
//       const url = row[0]
//       const stara_cena = row[1]
//       const nova_cena = row[2]
//       const popust = row[3]
//       const link = row[4]
      

//       var slika = document.createElement('img')
//       slika.setAttribute('src', url)
//       slika.setAttribute('id', 'slika-' + counter)

//       var stara_cena_1 = document.createElement('div')
//       stara_cena_1.setAttribute('id', 'stara-cena-' + counter)
//       var stara_cena_tekst = stara_cena.split('.')
          
//       if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
//         else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

//       var nova_cena_1 = document.createElement('div')
//       nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
//       var nova_cena_tekst = nova_cena.split('.')
      
//       if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
//         else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

//       var popust_1 = document.createElement('div')
//       popust_1.setAttribute('id', 'popust-' + counter)
//       popust_1.innerHTML = popust

//       var popust_container = document.createElement('div')
//       popust_container.setAttribute('class', 'crveni-krug')
//         //   inner_cell_1.append(naziv_1)
//       popust_container.append(popust_1)


//       var zuti_cenovnik = document.createElement('div')
//       zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

//       var cenovnik_left = document.createElement('div')
//       cenovnik_left.setAttribute('class', 'cenovnik-left')
//       cenovnik_left.append(nova_cena_1)

//       var cenovnik_right = document.createElement('div')
//       cenovnik_right.setAttribute('class', 'cenovnik-right')
//       cenovnik_right.append(stara_cena_1)

//       zuti_cenovnik.append(cenovnik_left)
//       zuti_cenovnik.append(cenovnik_right)

//       var outer_outer_cell = document.createElement('div')
//       outer_outer_cell.setAttribute('class', 'spoljni-div')
//       outer_outer_cell.append(slika)
//       outer_outer_cell.append(popust_container)
//       outer_outer_cell.append(zuti_cenovnik)
        
//       var query = 'sidebar_proizvod_' + counter
        
//       if(link != undefined) {

//         var link_wrapper = document.createElement('a')
//         link_wrapper.setAttribute('href', link)
//         link_wrapper.setAttribute('target', '_self')
//         link_wrapper.append(outer_outer_cell)
//         document.getElementById(query).append(link_wrapper)

//       } else document.getElementById(query).append(outer_outer_cell)
        
//       counter++

//     });
// }

async function getDataSortPrice() {
    const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
    const data = await response.text();
    
    const name_row = data.split('\n')

    const rows = data.split('\n').slice(1)


    let rows_copy = [...rows]

    let new_row = [rows_copy[0]]

    for(var x = 1; x < rows_copy.length; x++) {
      let current_price = parseInt(rows_copy[x].split(';')[4])

      if(current_price < parseInt(new_row[x-1].split(';')[4])) {
        if(x - 1 == 0) {
          let temp = new_row[x-1]
          new_row[x-1] = rows_copy[x]
          new_row[x] = temp
        } else {
          var y = x - 2
          if(current_price > parseInt(new_row[y].split(';')[4])) {
            let temp = new_row[y + 1]
            new_row[y + 1] = rows_copy[x]
            new_row[x] = temp
          } else {
            
            while(y > -1 && current_price < parseInt(new_row[y].split(';')[4])) {
              y--
            }

            if(y == -1) {
              new_row.splice(0,0,rows_copy[x])
            }else new_row.splice(y+1,0,rows_copy[x])
          }
          
        }

        
      } else {
        new_row.push(rows_copy[x])
      } 

    }




    var counter = 0;

    var red = 0;
    

    new_row.forEach(element => {
        const row = element.split(';')
        const kategorija = row[0]
        const sifra_artikla = row[1]
        const naziv = row[2]
        const stara_cena = row[3]
        const nova_cena = row[4]
        const popust = row[5]
        const url = ''
        const trajanje = row[6]
        const vazenje = row[7]       
        
        

        if(counter % 4 == 0 || counter == 0) {

          if(kategorija == '5') {
            
            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row')
            var row_id = 'proizvodi-row-cena-' + red
            tabela_row.setAttribute('id', row_id)
            // '<div class="proizvodi-row" id="proizvodi-row-' + counter + '"</div>'
              //  console.log(tabela_row)
            document.getElementById('tabela-proizvoda-cena').append(tabela_row)

            var cell = document.createElement('div')
            cell.setAttribute('class', 'prozivodi-cell')
            cell.setAttribute('id', 'cell-cena' + counter)

          //   var link = document.createElement('a')
          //   var homepage = 'https://maxi.sales-snap.com/page/preview/20'
          //   link.setAttribute('href', homepage)
          //   link.setAttribute('target', '_self')
          //   link.setAttribute('id', 'link-' + counter)

            var razmak = document.createElement('br')

            var slika = document.createElement('img')
            slika.setAttribute('src', url)
            slika.setAttribute('id', 'slika-cena' + counter)

          //   link.append(slika)

            var naziv_1 = document.createElement('div')
            naziv_1.setAttribute('id', 'naziv-cena' + counter)
            naziv_1.setAttribute('class', 'naziv-proizvoda')
            
            naziv_1.innerHTML = naziv

            var stara_cena_1 = document.createElement('div')
            stara_cena_1.setAttribute('id', 'stara-cena-cena' + counter)
            var stara_cena_tekst = stara_cena.split('.')
            
            if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
            else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

          //   var nova_cena_1 = document.createElement('div')
          //   nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
          //   var nova_cena_tekst = nova_cena.split('.')
          //   if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
          //   else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

          //   var popust_1 = document.createElement('div')
          //   popust_1.setAttribute('id', 'popust-' + counter)
          //   popust_1.innerHTML = popust


          //   cell.append(link)
          //   cell.append(naziv_1)
          //   cell.append(stara_cena_1)
          //   cell.append(nova_cena_1)
          //   cell.append(popust_1)

            var inner_cell_1 = document.createElement('div')
            inner_cell_1.setAttribute('class', 'div-inside')
            inner_cell_1.append(slika)

          //   var popust_container = document.createElement('div')
          //   popust_container.setAttribute('class', 'crveni-krug')
            inner_cell_1.append(naziv_1)
          //   popust_container.append(popust_1)

            
          //   inner_cell_1.append(popust_container)

          
          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik plava-cena')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(stara_cena_1)

          // var cenovnik_right = document.createElement('div')
          // cenovnik_right.setAttribute('class', 'cenovnik-right')
          // cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          // zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)


          
              var rok = document.createElement('div')
              rok.setAttribute('class', 'trajanje')
              if(trajanje != undefined) rok.append(trajanje)
              outer_outer_cell.append(rok)
              
              var lokacija = document.createElement('div')
              lokacija.setAttribute('class', 'lokacija')
              if(vazenje != undefined) lokacija.append(vazenje)
              outer_outer_cell.append(lokacija)
          // console.log(vazenje)

          tabela_row.append(outer_outer_cell)

            red++;

          } else {

            
            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row')
            var row_id = 'proizvodi-row-cena-' + red
            tabela_row.setAttribute('id', row_id)
            // '<div class="proizvodi-row" id="proizvodi-row-' + counter + '"</div>'
              //  console.log(tabela_row)
            document.getElementById('tabela-proizvoda-cena').append(tabela_row)

            var cell = document.createElement('div')
            cell.setAttribute('class', 'prozivodi-cell')
            cell.setAttribute('id', 'cell-cena-' + counter)

            var razmak = document.createElement('br')

            var slika = document.createElement('img')
            slika.setAttribute('src', url)
            slika.setAttribute('id', 'slika-cena-' + counter)

            var naziv_1 = document.createElement('div')
            naziv_1.setAttribute('id', 'naziv-cena-' + counter)
            naziv_1.setAttribute('class', 'naziv-proizvoda')

            naziv_1.innerHTML = naziv

            var stara_cena_1 = document.createElement('div')
            stara_cena_1.setAttribute('id', 'stara-cena-cena-' + counter)
            stara_cena_1.setAttribute('data-id', stara_cena)
            var stara_cena_tekst = stara_cena.split('.')
            
            if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
              else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

            var nova_cena_1 = document.createElement('div')
            nova_cena_1.setAttribute('id', 'nova-cena-cena-' + counter)
            nova_cena_1.setAttribute('data-id', nova_cena)
            var nova_cena_tekst = nova_cena.split('.')
            
            if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
              else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

            var popust_1 = document.createElement('div')
            popust_1.setAttribute('id', 'popust-cena-' + counter)
            popust_1.innerHTML = popust

            var inner_cell_1 = document.createElement('div')
            inner_cell_1.setAttribute('class', 'div-inside')
            inner_cell_1.append(slika)

            var popust_container = document.createElement('div')
            popust_container.setAttribute('class', 'crveni-krug')
            inner_cell_1.append(naziv_1)
            popust_container.append(popust_1)

            if(popust == '0%') popust_container.style.display = 'none'
            
            inner_cell_1.append(popust_container)

          
            var inner_cell_2 = document.createElement('div')
            inner_cell_2.setAttribute('class', 'div-inside')
            // inner_cell_2.append(naziv_1)

            var zuti_cenovnik = document.createElement('div')
            zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

            var cenovnik_left = document.createElement('div')
            cenovnik_left.setAttribute('class', 'cenovnik-left')
            cenovnik_left.append(nova_cena_1)

            var cenovnik_right = document.createElement('div')
            cenovnik_right.setAttribute('class', 'cenovnik-right')
            cenovnik_right.append(stara_cena_1)

            zuti_cenovnik.append(cenovnik_left)
            zuti_cenovnik.append(cenovnik_right)

            inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

            var outer_outer_cell = document.createElement('div')
            outer_outer_cell.setAttribute('class', 'spoljni-div')
            outer_outer_cell.setAttribute('id', sifra_artikla)
            outer_outer_cell.append(outer_cell)

      
    
          
            var rok = document.createElement('div')
            rok.setAttribute('class', 'trajanje')
            if(trajanje != undefined) rok.append(trajanje)
            outer_outer_cell.append(rok)
              
            var lokacija = document.createElement('div')
            lokacija.setAttribute('class', 'lokacija')
            if(vazenje != undefined) lokacija.append(vazenje)
            outer_outer_cell.append(lokacija)
          // console.log(vazenje)

            tabela_row.append(outer_outer_cell)

            // KALKULATOR START
            var kalkulator = document.createElement('div')
            kalkulator.setAttribute('class', 'kalkulator')
          
          
            var selektor_kalkulatora = document.createElement('div')
            selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
            
            var cekboks = document.createElement('input')
            cekboks.setAttribute('class','cekboks-kalkulatora')
            cekboks.setAttribute('type', 'checkbox')
            
            var span_cekboks = document.createElement('span')
            span_cekboks.setAttribute('class', 'checkmark')
            
            var telo_kalkulatora = document.createElement('div')
            telo_kalkulatora.setAttribute('class','telo-kalkulatora')
            telo_kalkulatora.setAttribute('style', 'display:none;')
            
            var minus_dugme = document.createElement('button')
            minus_dugme.setAttribute('class','decrease')
            minus_dugme.innerHTML = '-'
            
            var kolicina = document.createElement('span')
            kolicina.setAttribute('class', 'kolicina')
            kolicina.innerHTML = '0'
            
            var plus_dugme = document.createElement('button')
            plus_dugme.setAttribute('class','increase')
            plus_dugme.innerHTML = '+'
            
            var iznos_popusta = document.createElement('span')
            iznos_popusta.setAttribute('class', 'popust-artikal')
            iznos_popusta.setAttribute('style', 'display:none')
            iznos_popusta.innerHTML = '0'
            
            telo_kalkulatora.append(minus_dugme)
            telo_kalkulatora.append(kolicina)
            telo_kalkulatora.append(plus_dugme)
            telo_kalkulatora.append(iznos_popusta)
            
            selektor_kalkulatora.append(cekboks)
            selektor_kalkulatora.append(span_cekboks)
            // selektor_kalkulatora.append(telo_kalkulatora)
            kalkulator.append(selektor_kalkulatora)
          
            outer_outer_cell.prepend(kalkulator)
            outer_outer_cell.append(telo_kalkulatora)
          
            // KALKULATOR END


            red++;

        


          }

          if(counter == 12) {

            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
            // var row_id = 'promo-banner-cena'
            // tabela_row.setAttribute('id', row_id)
            tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="plava-cena" target="_self"><img src="" class="promo-banner" ></a></div>'
            document.getElementById('tabela-proizvoda-cena').append(tabela_row)

          } else if(counter == 4) {

            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row mobile-newsletter')
            // var row_id = 'mobile-newsletter-cena'
            // tabela_row.setAttribute('id', row_id)
            // var njuzleter = document.createElement('script')
            // njuzleter.setAttribute('src', 'https://maxi.sales-snap.com/form/generate.js?id=6')
            // tabela_row.append(njuzleter)

            document.getElementById('tabela-proizvoda-cena').append(tabela_row)

          } else if(counter == 0) {

            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
            // var row_id = 'promo-banner'
            // tabela_row.setAttribute('id', row_id)
            tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="javascript:void(0)" onclick="getMobileOperatingSystem()"><img src="https://maxi.sales-snap.com/asset/1592:moj-maxiloyalty-02png" class="promo-banner"></a></div>'
            document.getElementById('tabela-proizvoda-cena').append(tabela_row)

          }
        
      } else {
        
        if(kategorija == '5') {
          
          var cell = document.createElement('div')
          cell.setAttribute('class', 'prozivodi-cell')
          cell.setAttribute('id', 'cell-cena' + counter)


        //   var link = document.createElement('a')
        //   var homepage = 'https://maxi.sales-snap.com/page/preview/20'
        //   link.setAttribute('href', homepage)
        //   link.setAttribute('target', '_self')
        //   link.setAttribute('id', 'link-' + counter)

          var razmak = document.createElement('br')

          var slika = document.createElement('img')
          slika.setAttribute('src', url)
          slika.setAttribute('id', 'slika-cena' + counter)

        //   link.append(slika)

          var naziv_1 = document.createElement('div')
          naziv_1.setAttribute('id', 'naziv-cena' + counter)
          naziv_1.setAttribute('class', 'naziv-proizvoda')
          naziv_1.innerHTML = naziv

          var stara_cena_1 = document.createElement('div')
          stara_cena_1.setAttribute('id', 'stara-cena-cena' + counter)
          var stara_cena_tekst = stara_cena.split('.')
          if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
          else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

        //   var nova_cena_1 = document.createElement('div')
        //   nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
        //   var nova_cena_tekst = nova_cena.split('.')
        //   if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
        //   else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

        //   var popust_1 = document.createElement('div')
        //   popust_1.setAttribute('id', 'popust-' + counter)
        //   popust_1.innerHTML = popust


          var inner_cell_1 = document.createElement('div')
          inner_cell_1.setAttribute('class', 'div-inside')
          inner_cell_1.append(slika)

          //   var popust_container = document.createElement('div')
          //   popust_container.setAttribute('class', 'crveni-krug')
          //   inner_cell_1.append(naziv_1)
          //   popust_container.append(popust_1)

            
          //   inner_cell_1.append(popust_container)
            inner_cell_1.append(naziv_1)
          
          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik plava-cena')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(stara_cena_1)

          // var cenovnik_right = document.createElement('div')
          // cenovnik_right.setAttribute('class', 'cenovnik-right')
          // cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          // zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

          //   tabela_row.append(outer_cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)

          // tabela_row.append(outer_outer_cell)


          var rok = document.createElement('div')
              rok.setAttribute('class', 'trajanje')
              if(trajanje != undefined) rok.append(trajanje)
              outer_outer_cell.append(rok)
              
              var lokacija = document.createElement('div')
              lokacija.setAttribute('class', 'lokacija')
              if(vazenje != undefined) lokacija.append(vazenje)
              outer_outer_cell.append(lokacija)
              
              // console.log(vazenje)
              
          var query = 'proizvodi-row-cena-' + (red - 1)

            

          document.getElementById(query).append(outer_outer_cell)


        } else {


          var cell = document.createElement('div')
          cell.setAttribute('class', 'prozivodi-cell')
          cell.setAttribute('id', 'cell-cena-' + counter)

          var razmak = document.createElement('br')

          var slika = document.createElement('img')
          slika.setAttribute('src', url)
          slika.setAttribute('id', 'slika-cena-' + counter)

        //   link.append(slika)

          var naziv_1 = document.createElement('div')
          naziv_1.setAttribute('id', 'naziv-cena-' + counter)
          naziv_1.setAttribute('class', 'naziv-proizvoda')
          naziv_1.innerHTML = naziv

          var stara_cena_1 = document.createElement('div')
          stara_cena_1.setAttribute('id', 'stara-cena-cena-' + counter)
          stara_cena_1.setAttribute('data-id', stara_cena)
        
          var stara_cena_tekst = stara_cena.split('.')
          if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
            else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

          var nova_cena_1 = document.createElement('div')
          nova_cena_1.setAttribute('id', 'nova-cena-cena-' + counter)
          nova_cena_1.setAttribute('data-id', nova_cena)
          var nova_cena_tekst = nova_cena.split('.')
          
          if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
            else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

          var popust_1 = document.createElement('div')
          popust_1.setAttribute('id', 'popust-cena-' + counter)
          popust_1.innerHTML = popust


          var inner_cell_1 = document.createElement('div')
          inner_cell_1.setAttribute('class', 'div-inside')
          inner_cell_1.append(slika)

          var popust_container = document.createElement('div')
          popust_container.setAttribute('class', 'crveni-krug')
          inner_cell_1.append(naziv_1)
          popust_container.append(popust_1)

          if(popust == '0%') popust_container.style.display = 'none'
          
          inner_cell_1.append(popust_container)
        //   inner_cell_1.append(naziv_1)
        
          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(nova_cena_1)

          var cenovnik_right = document.createElement('div')
          cenovnik_right.setAttribute('class', 'cenovnik-right')
          cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


          var outer_cell = document.createElement('div')
          outer_cell.setAttribute('class', 'slicica-div')
          outer_cell.append(inner_cell_1)
          outer_cell.append(inner_cell_2)
        //   outer_cell.append(cell)

        //   tabela_row.append(outer_cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)
        
        

        // tabela_row.append(outer_outer_cell)


          var rok = document.createElement('div')
          rok.setAttribute('class', 'trajanje')
          
          if(trajanje != undefined) rok.append(trajanje)
          outer_outer_cell.append(rok)
            
          var lokacija = document.createElement('div')
          lokacija.setAttribute('class', 'lokacija')
          
          if(vazenje != undefined) lokacija.append(vazenje)
          outer_outer_cell.append(lokacija)
            
            // console.log(vazenje)
            
          var query = 'proizvodi-row-cena-' + (red - 1)

          

          document.getElementById(query).append(outer_outer_cell)

          // KALKULATOR START
          var kalkulator = document.createElement('div')
          kalkulator.setAttribute('class', 'kalkulator')
          
          
          var selektor_kalkulatora = document.createElement('div')
          selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
          
          var cekboks = document.createElement('input')
          cekboks.setAttribute('class','cekboks-kalkulatora')
          cekboks.setAttribute('type', 'checkbox')
          
          var span_cekboks = document.createElement('span')
          span_cekboks.setAttribute('class', 'checkmark')
          
          var telo_kalkulatora = document.createElement('div')
          telo_kalkulatora.setAttribute('class','telo-kalkulatora')
          telo_kalkulatora.setAttribute('style', 'display:none;')
          
          var minus_dugme = document.createElement('button')
          minus_dugme.setAttribute('class','decrease')
          minus_dugme.innerHTML = '-'
          
          var kolicina = document.createElement('span')
          kolicina.setAttribute('class', 'kolicina')
          kolicina.innerHTML = '0'
          
          var plus_dugme = document.createElement('button')
          plus_dugme.setAttribute('class','increase')
          plus_dugme.innerHTML = '+'
          
          var iznos_popusta = document.createElement('span')
          iznos_popusta.setAttribute('class', 'popust-artikal')
          iznos_popusta.setAttribute('style', 'display:none')
          iznos_popusta.innerHTML = '0'
          
          telo_kalkulatora.append(minus_dugme)
          telo_kalkulatora.append(kolicina)
          telo_kalkulatora.append(plus_dugme)
          telo_kalkulatora.append(iznos_popusta)
        
          selektor_kalkulatora.append(cekboks)
          selektor_kalkulatora.append(span_cekboks)
          // selektor_kalkulatora.append(telo_kalkulatora)
          kalkulator.append(selektor_kalkulatora)

          outer_outer_cell.prepend(kalkulator)
          outer_outer_cell.append(telo_kalkulatora)
        
        // KALKULATOR END
        }

          

      }
      counter++
    });

}   


async function getDataSortDiscount() {
    const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
    const data = await response.text();
    
    const name_row = data.split('\n')

    const rows = data.split('\n').slice(1)


    let rows_copy = [...rows]

    let new_row = [rows_copy[0]]

    for(var x = 1; x < rows_copy.length; x++) {
      let current_price = parseInt(rows_copy[x].split(';')[5])


      if(current_price < parseInt(new_row[x-1].split(';')[5])) {
        if(x - 1 == 0) {
          let temp = new_row[x-1]
          new_row[x-1] = rows_copy[x]
          new_row[x] = temp
        } else {
          var y = x - 2
          if(current_price > parseInt(new_row[y].split(';')[5])) {
            let temp = new_row[y + 1]
            new_row[y + 1] = rows_copy[x]
            new_row[x] = temp
          } else {
            
            while(y > -1 && current_price < parseInt(new_row[y].split(';')[5])) {

              y--
            }

            if(y == -1) {
              new_row.splice(0,0,rows_copy[x])
            }else new_row.splice(y+1,0,rows_copy[x])
          }

          
        }

        
      } else {
        new_row.push(rows_copy[x])
      } 


    }


    var counter = 0;

    var red = 0;
    
    var reversed_array = new_row.reverse()

    reversed_array.forEach(element => {
        const row = element.split(';')
        const kategorija = row[0]
        const sifra_artikla = row[1]
        const naziv = row[2]
        const stara_cena = row[3]
        const nova_cena = row[4]
        const popust = row[5]
        const url = ''
        const trajanje = row[6]
        const vazenje = row[7]
      

        if(counter % 4 == 0 || counter == 0) {

          if(kategorija == '5') {
            
            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row')
            var row_id = 'proizvodi-row-popust-' + red
            tabela_row.setAttribute('id', row_id)
            // '<div class="proizvodi-row" id="proizvodi-row-' + counter + '"</div>'
              //  console.log(tabela_row)
            document.getElementById('tabela-proizvoda-popust').append(tabela_row)

            var cell = document.createElement('div')
            cell.setAttribute('class', 'prozivodi-cell')
            cell.setAttribute('id', 'cell-popust' + counter)

          //   var link = document.createElement('a')
          //   var homepage = 'https://maxi.sales-snap.com/page/preview/20'
          //   link.setAttribute('href', homepage)
          //   link.setAttribute('target', '_self')
          //   link.setAttribute('id', 'link-' + counter)

            var razmak = document.createElement('br')

            var slika = document.createElement('img')
            slika.setAttribute('src', url)
            slika.setAttribute('id', 'slika-popust' + counter)

          //   link.append(slika)

            var naziv_1 = document.createElement('div')
            naziv_1.setAttribute('id', 'naziv-popust' + counter)
            naziv_1.setAttribute('class', 'naziv-proizvoda')
            
            naziv_1.innerHTML = naziv

            var stara_cena_1 = document.createElement('div')
            stara_cena_1.setAttribute('id', 'stara-cena-popust' + counter)
            var stara_cena_tekst = stara_cena.split('.')
            
            if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
            else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

          //   var nova_cena_1 = document.createElement('div')
          //   nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
          //   var nova_cena_tekst = nova_cena.split('.')
          //   if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
          //   else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

          //   var popust_1 = document.createElement('div')
          //   popust_1.setAttribute('id', 'popust-' + counter)
          //   popust_1.innerHTML = popust


          //   cell.append(link)
          //   cell.append(naziv_1)
          //   cell.append(stara_cena_1)
          //   cell.append(nova_cena_1)
          //   cell.append(popust_1)

            var inner_cell_1 = document.createElement('div')
            inner_cell_1.setAttribute('class', 'div-inside')
            inner_cell_1.append(slika)

          //   var popust_container = document.createElement('div')
          //   popust_container.setAttribute('class', 'crveni-krug')
            inner_cell_1.append(naziv_1)
          //   popust_container.append(popust_1)

            
          //   inner_cell_1.append(popust_container)


          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik plava-cena')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(stara_cena_1)

          // var cenovnik_right = document.createElement('div')
          // cenovnik_right.setAttribute('class', 'cenovnik-right')
          // cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          // zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)



              var rok = document.createElement('div')
              rok.setAttribute('class', 'trajanje')
              if(trajanje != undefined) rok.append(trajanje)
              outer_outer_cell.append(rok)
              
              var lokacija = document.createElement('div')
              lokacija.setAttribute('class', 'lokacija')
              if(vazenje != undefined) lokacija.append(vazenje)
              outer_outer_cell.append(lokacija)
          // console.log(vazenje)

          tabela_row.append(outer_outer_cell)

            red++;

          } else {

            var tabela_row = document.createElement('div') 
            tabela_row.setAttribute('class', 'proizvodi-row')
            var row_id = 'proizvodi-row-popust-' + red
            tabela_row.setAttribute('id', row_id)
            // '<div class="proizvodi-row" id="proizvodi-row-' + counter + '"</div>'
              //  console.log(tabela_row)
            document.getElementById('tabela-proizvoda-popust').append(tabela_row)

            var cell = document.createElement('div')
            cell.setAttribute('class', 'prozivodi-cell')
            cell.setAttribute('id', 'cell-popust-' + counter)

            var razmak = document.createElement('br')

            var slika = document.createElement('img')
            slika.setAttribute('src', url)
            slika.setAttribute('id', 'slika-popust-' + counter)

            var naziv_1 = document.createElement('div')
            naziv_1.setAttribute('id', 'naziv-popust-' + counter)
            naziv_1.setAttribute('class', 'naziv-proizvoda')

            naziv_1.innerHTML = naziv

            var stara_cena_1 = document.createElement('div')
            stara_cena_1.setAttribute('id', 'stara-cena-popust-' + counter)
            stara_cena_1.setAttribute('data-id', stara_cena)
            var stara_cena_tekst = stara_cena.split('.')
            
            if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
              else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

            var nova_cena_1 = document.createElement('div')
            nova_cena_1.setAttribute('id', 'nova-cena-popust-' + counter)
            nova_cena_1.setAttribute('data-id', nova_cena)
            var nova_cena_tekst = nova_cena.split('.')
            
            if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
              else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

            var popust_1 = document.createElement('div')
            popust_1.setAttribute('id', 'popust-popust-' + counter)
            popust_1.innerHTML = popust

            var inner_cell_1 = document.createElement('div')
            inner_cell_1.setAttribute('class', 'div-inside')
            inner_cell_1.append(slika)

            var popust_container = document.createElement('div')
            popust_container.setAttribute('class', 'crveni-krug')
            inner_cell_1.append(naziv_1)
            popust_container.append(popust_1)

            if(popust == '0%') popust_container.style.display = 'none'
            
            inner_cell_1.append(popust_container)


            var inner_cell_2 = document.createElement('div')
            inner_cell_2.setAttribute('class', 'div-inside')
            // inner_cell_2.append(naziv_1)

            var zuti_cenovnik = document.createElement('div')
            zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

            var cenovnik_left = document.createElement('div')
            cenovnik_left.setAttribute('class', 'cenovnik-left')
            cenovnik_left.append(nova_cena_1)

            var cenovnik_right = document.createElement('div')
            cenovnik_right.setAttribute('class', 'cenovnik-right')
            cenovnik_right.append(stara_cena_1)

            zuti_cenovnik.append(cenovnik_left)
            zuti_cenovnik.append(cenovnik_right)

            inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

            var outer_outer_cell = document.createElement('div')
            outer_outer_cell.setAttribute('class', 'spoljni-div')
            outer_outer_cell.setAttribute('id', sifra_artikla)
            outer_outer_cell.append(outer_cell)




            var rok = document.createElement('div')
            rok.setAttribute('class', 'trajanje')
            if(trajanje != undefined) rok.append(trajanje)
            outer_outer_cell.append(rok)
              
            var lokacija = document.createElement('div')
            lokacija.setAttribute('class', 'lokacija')
            if(vazenje != undefined) lokacija.append(vazenje)
            outer_outer_cell.append(lokacija)
          // console.log(vazenje)

            tabela_row.append(outer_outer_cell)

            // KALKULATOR START
            var kalkulator = document.createElement('div')
            kalkulator.setAttribute('class', 'kalkulator')


            var selektor_kalkulatora = document.createElement('div')
            selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
            
            var cekboks = document.createElement('input')
            cekboks.setAttribute('class','cekboks-kalkulatora')
            cekboks.setAttribute('type', 'checkbox')
            
            var span_cekboks = document.createElement('span')
            span_cekboks.setAttribute('class', 'checkmark')
            
            var telo_kalkulatora = document.createElement('div')
            telo_kalkulatora.setAttribute('class','telo-kalkulatora')
            telo_kalkulatora.setAttribute('style', 'display:none;')
            
            var minus_dugme = document.createElement('button')
            minus_dugme.setAttribute('class','decrease')
            minus_dugme.innerHTML = '-'
            
            var kolicina = document.createElement('span')
            kolicina.setAttribute('class', 'kolicina')
            kolicina.innerHTML = '0'
            
            var plus_dugme = document.createElement('button')
            plus_dugme.setAttribute('class','increase')
            plus_dugme.innerHTML = '+'
            
            var iznos_popusta = document.createElement('span')
            iznos_popusta.setAttribute('class', 'popust-artikal')
            iznos_popusta.setAttribute('style', 'display:none')
            iznos_popusta.innerHTML = '0'
            
            telo_kalkulatora.append(minus_dugme)
            telo_kalkulatora.append(kolicina)
            telo_kalkulatora.append(plus_dugme)
            telo_kalkulatora.append(iznos_popusta)
            
            selektor_kalkulatora.append(cekboks)
            selektor_kalkulatora.append(span_cekboks)
            // selektor_kalkulatora.append(telo_kalkulatora)
            kalkulator.append(selektor_kalkulatora)

            outer_outer_cell.prepend(kalkulator)
            outer_outer_cell.append(telo_kalkulatora)

            // KALKULATOR END


            red++;

            if(counter == 12) {

              var tabela_row = document.createElement('div') 
              tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
              // var row_id = 'promo-banner-cena'
              // tabela_row.setAttribute('id', row_id)
              tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="plava-cena" target="_self"><img src="" class="promo-banner"></a></div>'
              document.getElementById('tabela-proizvoda-popust').append(tabela_row)

            } else if(counter == 4) {

              var tabela_row = document.createElement('div') 
              tabela_row.setAttribute('class', 'proizvodi-row mobile-newsletter')
              // var row_id = 'mobile-newsletter-cena'
              // tabela_row.setAttribute('id', row_id)
              // var njuzleter = document.createElement('script')
              // njuzleter.setAttribute('src', 'https://maxi.sales-snap.com/form/generate.js?id=6')
              // tabela_row.append(njuzleter)

              document.getElementById('tabela-proizvoda-popust').append(tabela_row)

            } else if(counter == 0) {

              var tabela_row = document.createElement('div') 
              tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
              // var row_id = 'promo-banner'
              // tabela_row.setAttribute('id', row_id)
              tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="javascript:void(0)" onclick="getMobileOperatingSystem()"><img src="https://maxi.sales-snap.com/asset/1592:moj-maxiloyalty-02png" class="promo-banner"></a></div>'
              document.getElementById('tabela-proizvoda-popust').append(tabela_row)

            }
          }



          } else {

          if(kategorija == '5') {

          var cell = document.createElement('div')
          cell.setAttribute('class', 'prozivodi-cell')
          cell.setAttribute('id', 'cell-popust' + counter)


          //   var link = document.createElement('a')
          //   var homepage = 'https://maxi.sales-snap.com/page/preview/20'
          //   link.setAttribute('href', homepage)
          //   link.setAttribute('target', '_self')
          //   link.setAttribute('id', 'link-' + counter)

          var razmak = document.createElement('br')

          var slika = document.createElement('img')
          slika.setAttribute('src', url)
          slika.setAttribute('id', 'slika-popust' + counter)

          //   link.append(slika)

          var naziv_1 = document.createElement('div')
          naziv_1.setAttribute('id', 'naziv-popust' + counter)
          naziv_1.setAttribute('class', 'naziv-proizvoda')
          naziv_1.innerHTML = naziv

          var stara_cena_1 = document.createElement('div')
          stara_cena_1.setAttribute('id', 'stara-cena-popust' + counter)
          var stara_cena_tekst = stara_cena.split('.')
          if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
          else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

          //   var nova_cena_1 = document.createElement('div')
          //   nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
          //   var nova_cena_tekst = nova_cena.split('.')
          //   if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
          //   else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

          //   var popust_1 = document.createElement('div')
          //   popust_1.setAttribute('id', 'popust-' + counter)
          //   popust_1.innerHTML = popust


          var inner_cell_1 = document.createElement('div')
          inner_cell_1.setAttribute('class', 'div-inside')
          inner_cell_1.append(slika)

          //   var popust_container = document.createElement('div')
          //   popust_container.setAttribute('class', 'crveni-krug')
          //   inner_cell_1.append(naziv_1)
          //   popust_container.append(popust_1)

            
          //   inner_cell_1.append(popust_container)
            inner_cell_1.append(naziv_1)

          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik plava-cena')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(stara_cena_1)

          // var cenovnik_right = document.createElement('div')
          // cenovnik_right.setAttribute('class', 'cenovnik-right')
          // cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          // zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

          //   tabela_row.append(outer_cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)

          // tabela_row.append(outer_outer_cell)


          var rok = document.createElement('div')
              rok.setAttribute('class', 'trajanje')
              if(trajanje != undefined) rok.append(trajanje)
              outer_outer_cell.append(rok)
              
              var lokacija = document.createElement('div')
              lokacija.setAttribute('class', 'lokacija')
              if(vazenje != undefined) lokacija.append(vazenje)
              outer_outer_cell.append(lokacija)
              
              // console.log(vazenje)
              
          var query = 'proizvodi-row-popust-' + (red - 1)

            

          document.getElementById(query).append(outer_outer_cell)


          } else {


          var cell = document.createElement('div')
          cell.setAttribute('class', 'prozivodi-cell')
          cell.setAttribute('id', 'cell-popust-' + counter)

          var razmak = document.createElement('br')

          var slika = document.createElement('img')
          slika.setAttribute('src', url)
          slika.setAttribute('id', 'slika-popust-' + counter)

          //   link.append(slika)

          var naziv_1 = document.createElement('div')
          naziv_1.setAttribute('id', 'naziv-popust-' + counter)
          naziv_1.setAttribute('class', 'naziv-proizvoda')
          naziv_1.innerHTML = naziv

          var stara_cena_1 = document.createElement('div')
          stara_cena_1.setAttribute('id', 'stara-cena-popust-' + counter)
          stara_cena_1.setAttribute('data-id', stara_cena)

          var stara_cena_tekst = stara_cena.split('.')
          if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
            else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

          var nova_cena_1 = document.createElement('div')
          nova_cena_1.setAttribute('id', 'nova-cena-popust-' + counter)
          nova_cena_1.setAttribute('data-id', nova_cena)
          var nova_cena_tekst = nova_cena.split('.')

          if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
            else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

          var popust_1 = document.createElement('div')
          popust_1.setAttribute('id', 'popust-popust-' + counter)
          popust_1.innerHTML = popust


          var inner_cell_1 = document.createElement('div')
          inner_cell_1.setAttribute('class', 'div-inside')
          inner_cell_1.append(slika)

          var popust_container = document.createElement('div')
          popust_container.setAttribute('class', 'crveni-krug')
          inner_cell_1.append(naziv_1)
          popust_container.append(popust_1)

          if(popust == '0%') popust_container.style.display = 'none'

          inner_cell_1.append(popust_container)
          //   inner_cell_1.append(naziv_1)

          var inner_cell_2 = document.createElement('div')
          inner_cell_2.setAttribute('class', 'div-inside')
          // inner_cell_2.append(naziv_1)

          var zuti_cenovnik = document.createElement('div')
          zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

          var cenovnik_left = document.createElement('div')
          cenovnik_left.setAttribute('class', 'cenovnik-left')
          cenovnik_left.append(nova_cena_1)

          var cenovnik_right = document.createElement('div')
          cenovnik_right.setAttribute('class', 'cenovnik-right')
          cenovnik_right.append(stara_cena_1)

          zuti_cenovnik.append(cenovnik_left)
          zuti_cenovnik.append(cenovnik_right)

          inner_cell_2.append(zuti_cenovnik)


          var outer_cell = document.createElement('div')
          outer_cell.setAttribute('class', 'slicica-div')
          outer_cell.append(inner_cell_1)
          outer_cell.append(inner_cell_2)
          //   outer_cell.append(cell)

          //   tabela_row.append(outer_cell)

          var outer_outer_cell = document.createElement('div')
          outer_outer_cell.setAttribute('class', 'spoljni-div')
          outer_outer_cell.setAttribute('id', sifra_artikla)
          outer_outer_cell.append(outer_cell)



          // tabela_row.append(outer_outer_cell)


          var rok = document.createElement('div')
          rok.setAttribute('class', 'trajanje')

          if(trajanje != undefined) rok.append(trajanje)
          outer_outer_cell.append(rok)
            
          var lokacija = document.createElement('div')
          lokacija.setAttribute('class', 'lokacija')

          if(vazenje != undefined) lokacija.append(vazenje)
          outer_outer_cell.append(lokacija)
            
            // console.log(vazenje)
            
          var query = 'proizvodi-row-popust-' + (red - 1)



          document.getElementById(query).append(outer_outer_cell)

          // KALKULATOR START
          var kalkulator = document.createElement('div')
          kalkulator.setAttribute('class', 'kalkulator')


          var selektor_kalkulatora = document.createElement('div')
          selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')

          var cekboks = document.createElement('input')
          cekboks.setAttribute('class','cekboks-kalkulatora')
          cekboks.setAttribute('type', 'checkbox')

          var span_cekboks = document.createElement('span')
          span_cekboks.setAttribute('class', 'checkmark')

          var telo_kalkulatora = document.createElement('div')
          telo_kalkulatora.setAttribute('class','telo-kalkulatora')
          telo_kalkulatora.setAttribute('style', 'display:none;')

          var minus_dugme = document.createElement('button')
          minus_dugme.setAttribute('class','decrease')
          minus_dugme.innerHTML = '-'

          var kolicina = document.createElement('span')
          kolicina.setAttribute('class', 'kolicina')
          kolicina.innerHTML = '0'

          var plus_dugme = document.createElement('button')
          plus_dugme.setAttribute('class','increase')
          plus_dugme.innerHTML = '+'

          var iznos_popusta = document.createElement('span')
          iznos_popusta.setAttribute('class', 'popust-artikal')
          iznos_popusta.setAttribute('style', 'display:none')
          iznos_popusta.innerHTML = '0'

          telo_kalkulatora.append(minus_dugme)
          telo_kalkulatora.append(kolicina)
          telo_kalkulatora.append(plus_dugme)
          telo_kalkulatora.append(iznos_popusta)

          selektor_kalkulatora.append(cekboks)
          selektor_kalkulatora.append(span_cekboks)
          // selektor_kalkulatora.append(telo_kalkulatora)
          kalkulator.append(selektor_kalkulatora)

          outer_outer_cell.prepend(kalkulator)
          outer_outer_cell.append(telo_kalkulatora)

          // KALKULATOR END
          }



        }
          counter++

    });
  
} 

async function createSearch() {
  
  const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
    const data = await response.text();
    
    const name_row = data.split('\n')

    const rows = data.split('\n').slice(1)

    rows.forEach(element => {
        const row = element.split(';')
        const link = row[0]
        const sifra_artikla = row[1]
        const naziv = row[2]
        const nova_cena = row[3]
        const stara_cena = row[4]
        const popust = row[5]
  
        let option_link_element = document.createElement('a')
        let option_link_href = ''
        var tekst = naziv + ', ' + nova_cena + ' din'
        switch(link) {
          case '1': 
            option_link_href = 'izaberi-uvek-sveze#' + sifra_artikla
            break;

          case '2': 
            option_link_href = 'uzivaj-u-ukusnom-delikatesu#' + sifra_artikla
            break;

          case '3': 
            option_link_href = 'pripremi-ukusan-obrok#' + sifra_artikla
            break;
          
          case '4': 
            option_link_href = 'gricni-i-osvezi-se#' + sifra_artikla
            break;
          
          case '5': 
            option_link_href = 'plava-cena#' + sifra_artikla
            break;
        }
        
        option_link_element.setAttribute('href', option_link_href)
        option_link_element.innerText = tekst

        let option_list_item = document.createElement('li')
        option_list_item.append(option_link_element)

        document.getElementById('myUL').append(option_list_item)

  });


}

// CATEGORY FUNCTIONS
async function getDataCategory(sifra) {
    const sifra_kategorije = sifra
    const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
    const data = await response.text();
    
    const name_row = data.split('\n')

    const rows = data.split('\n').slice(1)

    var counter = 0;

    var red = 0;
    
    // KREIRANJE HTML ELEMENATA ZA ARTIKLE
    rows.forEach(element => {
        const row = element.split(';')
        const kategorija = row[0]
        const sifra_artikla = row[1]
        const naziv = row[2]
        const stara_cena = row[3]
        const nova_cena = row[4]
        const popust = row[5]
        const url = ''
        const trajanje = row[6]
        const vazenje = row[7]

        if(sifra_kategorije == kategorija) {

      

            if(counter % 4 == 0 || counter == 0) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row')
                var row_id = 'proizvodi-row-' + red
                tabela_row.setAttribute('id', row_id)
                document.getElementById('tabela-proizvoda').append(tabela_row)

                var cell = document.createElement('div')
                cell.setAttribute('class', 'prozivodi-cell')
                cell.setAttribute('id', 'cell-' + counter)

                var razmak = document.createElement('br')

                var slika = document.createElement('img')
                slika.setAttribute('src', url)
                slika.setAttribute('id', 'slika-' + counter)

                var naziv_1 = document.createElement('div')
                naziv_1.setAttribute('id', 'naziv-' + counter)
                naziv_1.setAttribute('class', 'naziv-proizvoda')

                naziv_1.innerHTML = naziv

                var stara_cena_1 = document.createElement('div')
                stara_cena_1.setAttribute('id', 'stara-cena-' + counter)
                stara_cena_1.setAttribute('data-id', stara_cena)
                var stara_cena_tekst = stara_cena.split('.')
                
                if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
                else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

                var nova_cena_1 = document.createElement('div')
                nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
                nova_cena_1.setAttribute('data-id', nova_cena)
                var nova_cena_tekst = nova_cena.split('.')
                if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
                else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

                var popust_1 = document.createElement('div')
                popust_1.setAttribute('id', 'popust-' + counter)
                popust_1.innerHTML = popust


                var inner_cell_1 = document.createElement('div')
                inner_cell_1.setAttribute('class', 'div-inside')
                inner_cell_1.append(slika)

                var popust_container = document.createElement('div')
                popust_container.setAttribute('class', 'crveni-krug')
                inner_cell_1.append(naziv_1)
                popust_container.append(popust_1)

                if(popust == '0%') popust_container.style.display = 'none'
                
                inner_cell_1.append(popust_container)

                
                var inner_cell_2 = document.createElement('div')
                inner_cell_2.setAttribute('class', 'div-inside')
                // inner_cell_2.append(naziv_1)

                var zuti_cenovnik = document.createElement('div')
                zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

                var cenovnik_left = document.createElement('div')
                cenovnik_left.setAttribute('class', 'cenovnik-left')
                cenovnik_left.append(nova_cena_1)

                var cenovnik_right = document.createElement('div')
                cenovnik_right.setAttribute('class', 'cenovnik-right')
                cenovnik_right.append(stara_cena_1)

                zuti_cenovnik.append(cenovnik_left)
                zuti_cenovnik.append(cenovnik_right)

                inner_cell_2.append(zuti_cenovnik)


                var outer_cell = document.createElement('div')
                outer_cell.setAttribute('class', 'slicica-div')
                outer_cell.append(inner_cell_1)
                outer_cell.append(inner_cell_2)
                //   outer_cell.append(cell)

                var outer_outer_cell = document.createElement('div')
                outer_outer_cell.setAttribute('class', 'spoljni-div')
                outer_outer_cell.setAttribute('id', sifra_artikla)
                outer_outer_cell.append(outer_cell)


                var rok = document.createElement('div')
                rok.setAttribute('class', 'trajanje')
                
                if(trajanje != undefined) rok.append(trajanje)
                outer_outer_cell.append(rok)
                    
                var lokacija = document.createElement('div')
                lokacija.setAttribute('class', 'lokacija')
                
                if(vazenje != undefined) lokacija.append(vazenje)
                outer_outer_cell.append(lokacija)


                tabela_row.append(outer_outer_cell)


                // KALKULATOR START
                var kalkulator = document.createElement('div')
                kalkulator.setAttribute('class', 'kalkulator')
                
                
                var selektor_kalkulatora = document.createElement('div')
                selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
                
                var cekboks = document.createElement('input')
                cekboks.setAttribute('class','cekboks-kalkulatora')
                cekboks.setAttribute('type', 'checkbox')
                
                var span_cekboks = document.createElement('span')
                span_cekboks.setAttribute('class', 'checkmark')
                
                var telo_kalkulatora = document.createElement('div')
                telo_kalkulatora.setAttribute('class','telo-kalkulatora')
                telo_kalkulatora.setAttribute('style', 'display:none;')
                
                var minus_dugme = document.createElement('button')
                minus_dugme.setAttribute('class','decrease')
                minus_dugme.innerHTML = '-'
                
                var kolicina = document.createElement('span')
                kolicina.setAttribute('class', 'kolicina')
                kolicina.innerHTML = '0'
                
                var plus_dugme = document.createElement('button')
                plus_dugme.setAttribute('class','increase')
                plus_dugme.innerHTML = '+'
                
                var iznos_popusta = document.createElement('span')
                iznos_popusta.setAttribute('class', 'popust-artikal')
                iznos_popusta.setAttribute('style', 'display:none')
                iznos_popusta.innerHTML = '0'
                
                telo_kalkulatora.append(minus_dugme)
                telo_kalkulatora.append(kolicina)
                telo_kalkulatora.append(plus_dugme)
                telo_kalkulatora.append(iznos_popusta)
                
                selektor_kalkulatora.append(cekboks)
                selektor_kalkulatora.append(span_cekboks)
                // selektor_kalkulatora.append(telo_kalkulatora)
                kalkulator.append(selektor_kalkulatora)
                
                outer_outer_cell.prepend(kalkulator)
                outer_outer_cell.append(telo_kalkulatora)
                
                // KALKULATOR END

                red++;

                // PROMO BANERI I MOBILE NEWSLETTER
                if(counter == 0) {
                    var tabela_row = document.createElement('div') 
                    tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
                    // var row_id = 'promo-banner'
                    // tabela_row.setAttribute('id', row_id)
                    tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="plava-cena" target="_self"><img src="" class="promo-banner"></a></div>'
                    document.getElementById('tabela-proizvoda').append(tabela_row)
                } else if(counter == 4) {
                    var tabela_row = document.createElement('div') 
                    tabela_row.setAttribute('class', 'proizvodi-row mobile-newsletter')
                    // var row_id = 'mobile-newsletter'
                    // tabela_row.setAttribute('id', row_id)
                    var njuzleter_wrapper = document.createElement('div')
                    njuzleter_wrapper.setAttribute('class','mobile-newsletter-wrapper')

                    

                    var njuzleter = document.createElement('script')
                    njuzleter.setAttribute('src', 'https://maxi.sales-snap.com/form/generate.js?id=6')

                    njuzleter_wrapper.append(njuzleter)
                    tabela_row.append(njuzleter_wrapper)
                    

                    document.getElementById('tabela-proizvoda').append(tabela_row)
                } else if(counter == 8) {
                    var tabela_row = document.createElement('div') 
                    tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
                    // var row_id = 'promo-banner'
                    // tabela_row.setAttribute('id', row_id)
                    tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="javascript:void(0)" onclick="getMobileOperatingSystem()"><img src="https://maxi.sales-snap.com/asset/1592:moj-maxiloyalty-02png" class="promo-banner"></a></div>'
                    document.getElementById('tabela-proizvoda').append(tabela_row)
                }
                
                
            } else {

            
                var cell = document.createElement('div')
                cell.setAttribute('class', 'prozivodi-cell')
                cell.setAttribute('id', 'cell-' + counter)

                var razmak = document.createElement('br')

                var slika = document.createElement('img')
                slika.setAttribute('src', url)
                slika.setAttribute('id', 'slika-' + counter)

                var naziv_1 = document.createElement('div')
                naziv_1.setAttribute('id', 'naziv-' + counter)
                naziv_1.setAttribute('class', 'naziv-proizvoda')
                naziv_1.innerHTML = naziv

                var stara_cena_1 = document.createElement('div')
                stara_cena_1.setAttribute('id', 'stara-cena-' + counter)
                stara_cena_1.setAttribute('data-id', stara_cena)
                
                var stara_cena_tekst = stara_cena.split('.')
                if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
                else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

                var nova_cena_1 = document.createElement('div')
                nova_cena_1.setAttribute('id', 'nova-cena-' + counter)
                        nova_cena_1.setAttribute('data-id', nova_cena)
                var nova_cena_tekst = nova_cena.split('.')
                if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
                else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

                var popust_1 = document.createElement('div')
                popust_1.setAttribute('id', 'popust-' + counter)
                popust_1.innerHTML = popust


                var inner_cell_1 = document.createElement('div')
                inner_cell_1.setAttribute('class', 'div-inside')
                inner_cell_1.append(slika)

                var popust_container = document.createElement('div')
                popust_container.setAttribute('class', 'crveni-krug')
                inner_cell_1.append(naziv_1)
                popust_container.append(popust_1)

                if(popust == '0%') popust_container.style.display = 'none'
                
                inner_cell_1.append(popust_container)
                //   inner_cell_1.append(naziv_1)
                
                var inner_cell_2 = document.createElement('div')
                inner_cell_2.setAttribute('class', 'div-inside')
                // inner_cell_2.append(naziv_1)

                var zuti_cenovnik = document.createElement('div')
                zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

                var cenovnik_left = document.createElement('div')
                cenovnik_left.setAttribute('class', 'cenovnik-left')
                cenovnik_left.append(nova_cena_1)

                var cenovnik_right = document.createElement('div')
                cenovnik_right.setAttribute('class', 'cenovnik-right')
                cenovnik_right.append(stara_cena_1)

                zuti_cenovnik.append(cenovnik_left)
                zuti_cenovnik.append(cenovnik_right)

                inner_cell_2.append(zuti_cenovnik)


                var outer_cell = document.createElement('div')
                outer_cell.setAttribute('class', 'slicica-div')
                outer_cell.append(inner_cell_1)
                outer_cell.append(inner_cell_2)
                //   outer_cell.append(cell)

                //   tabela_row.append(outer_cell)

                var outer_outer_cell = document.createElement('div')
                outer_outer_cell.setAttribute('class', 'spoljni-div')
                outer_outer_cell.setAttribute('id', sifra_artikla)
                outer_outer_cell.append(outer_cell)
                
                

                // tabela_row.append(outer_outer_cell)


                var rok = document.createElement('div')
                rok.setAttribute('class', 'trajanje')
                if(trajanje != undefined) rok.append(trajanje)
                outer_outer_cell.append(rok)
                    
                var lokacija = document.createElement('div')
                lokacija.setAttribute('class', 'lokacija')
                if(vazenje != undefined) lokacija.append(vazenje)
                outer_outer_cell.append(lokacija)
                    
                    // console.log(vazenje)
                    
                var query = 'proizvodi-row-' + (red - 1)

                document.getElementById(query).append(outer_outer_cell)
                
                
                // KALKULATOR START
                var kalkulator = document.createElement('div')
                kalkulator.setAttribute('class', 'kalkulator')
                
                
                var selektor_kalkulatora = document.createElement('div')
                selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
                
                var cekboks = document.createElement('input')
                cekboks.setAttribute('class','cekboks-kalkulatora')
                cekboks.setAttribute('type', 'checkbox')
                
                var span_cekboks = document.createElement('span')
                span_cekboks.setAttribute('class', 'checkmark')
                
                var telo_kalkulatora = document.createElement('div')
                telo_kalkulatora.setAttribute('class','telo-kalkulatora')
                telo_kalkulatora.setAttribute('style', 'display:none;')
                
                var minus_dugme = document.createElement('button')
                minus_dugme.setAttribute('class','decrease')
                minus_dugme.innerHTML = '-'
                
                var kolicina = document.createElement('span')
                kolicina.setAttribute('class', 'kolicina')
                kolicina.innerHTML = '0'
                
                var plus_dugme = document.createElement('button')
                plus_dugme.setAttribute('class','increase')
                plus_dugme.innerHTML = '+'
                
                var iznos_popusta = document.createElement('span')
                iznos_popusta.setAttribute('class', 'popust-artikal')
                iznos_popusta.setAttribute('style', 'display:none')
                iznos_popusta.innerHTML = '0'
                
                telo_kalkulatora.append(minus_dugme)
                telo_kalkulatora.append(kolicina)
                telo_kalkulatora.append(plus_dugme)
                telo_kalkulatora.append(iznos_popusta)
                
                selektor_kalkulatora.append(cekboks)
                selektor_kalkulatora.append(span_cekboks)
                // selektor_kalkulatora.append(telo_kalkulatora)
                kalkulator.append(selektor_kalkulatora)
                
                outer_outer_cell.prepend(kalkulator)
                outer_outer_cell.append(telo_kalkulatora)
                
                // KALKULATOR END


            }
            counter++

        }

    });
  
}   

async function getDataSortPriceCategory(sifra) {
    const sifra_kategorije = sifra
    const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
    const data = await response.text();
    
    const name_row = data.split('\n')

    const rows = data.split('\n').slice(1)


    let rows_copy = [...rows]

    let new_row = [rows_copy[0]]

    for(var x = 1; x < rows_copy.length; x++) {
      let current_price = parseInt(rows_copy[x].split(';')[3])

      if(current_price < parseInt(new_row[x-1].split(';')[3])) {
        if(x - 1 == 0) {
          let temp = new_row[x-1]
          new_row[x-1] = rows_copy[x]
          new_row[x] = temp
        } else {
          var y = x - 2
          if(current_price > parseInt(new_row[y].split(';')[3])) {
            let temp = new_row[y + 1]
            new_row[y + 1] = rows_copy[x]
            new_row[x] = temp
          } else {
            
            while(y > -1 && current_price < parseInt(new_row[y].split(';')[3])) {
              y--
            }

            if(y == -1) {
              new_row.splice(0,0,rows_copy[x])
            }else new_row.splice(y+1,0,rows_copy[x])
          }
          
        }

        
      } else {
        new_row.push(rows_copy[x])
      } 

    }




    var counter = 0;

    var red = 0;
    

    new_row.forEach(element => {
        const row = element.split(';')
        const kategorija = row[0]
        const sifra_artikla = row[1]
        const naziv = row[2]
        const stara_cena = row[3]
        const nova_cena = row[4]
        const popust = row[5]
        const url = ''
        const trajanje = row[6]
        const vazenje = row[7]  
        
        if(sifra_kategorije == kategorija) {

            if(counter % 4 == 0 || counter == 0) {

            

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row')
                var row_id = 'proizvodi-row-cena-' + red
                tabela_row.setAttribute('id', row_id)
                // '<div class="proizvodi-row" id="proizvodi-row-' + counter + '"</div>'
                //  console.log(tabela_row)
                document.getElementById('tabela-proizvoda-cena').append(tabela_row)

                var cell = document.createElement('div')
                cell.setAttribute('class', 'prozivodi-cell')
                cell.setAttribute('id', 'cell-cena-' + counter)

                var razmak = document.createElement('br')

                var slika = document.createElement('img')
                slika.setAttribute('src', url)
                slika.setAttribute('id', 'slika-cena-' + counter)

                var naziv_1 = document.createElement('div')
                naziv_1.setAttribute('id', 'naziv-cena-' + counter)
                naziv_1.setAttribute('class', 'naziv-proizvoda')

                naziv_1.innerHTML = naziv

                var stara_cena_1 = document.createElement('div')
                stara_cena_1.setAttribute('id', 'stara-cena-cena-' + counter)
                stara_cena_1.setAttribute('data-id', stara_cena)
                var stara_cena_tekst = stara_cena.split('.')
                
                if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
                else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

                var nova_cena_1 = document.createElement('div')
                nova_cena_1.setAttribute('id', 'nova-cena-cena-' + counter)
                nova_cena_1.setAttribute('data-id', nova_cena)
                var nova_cena_tekst = nova_cena.split('.')
                
                if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
                else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

                var popust_1 = document.createElement('div')
                popust_1.setAttribute('id', 'popust-cena-' + counter)
                popust_1.innerHTML = popust

                var inner_cell_1 = document.createElement('div')
                inner_cell_1.setAttribute('class', 'div-inside')
                inner_cell_1.append(slika)

                var popust_container = document.createElement('div')
                popust_container.setAttribute('class', 'crveni-krug')
                inner_cell_1.append(naziv_1)
                popust_container.append(popust_1)

                if(popust == '0%') popust_container.style.display = 'none'
                
                inner_cell_1.append(popust_container)

            
                var inner_cell_2 = document.createElement('div')
                inner_cell_2.setAttribute('class', 'div-inside')
                // inner_cell_2.append(naziv_1)

                var zuti_cenovnik = document.createElement('div')
                zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

                var cenovnik_left = document.createElement('div')
                cenovnik_left.setAttribute('class', 'cenovnik-left')
                cenovnik_left.append(nova_cena_1)

                var cenovnik_right = document.createElement('div')
                cenovnik_right.setAttribute('class', 'cenovnik-right')
                cenovnik_right.append(stara_cena_1)

                zuti_cenovnik.append(cenovnik_left)
                zuti_cenovnik.append(cenovnik_right)

                inner_cell_2.append(zuti_cenovnik)


                var outer_cell = document.createElement('div')
                outer_cell.setAttribute('class', 'slicica-div')
                outer_cell.append(inner_cell_1)
                outer_cell.append(inner_cell_2)
            //   outer_cell.append(cell)

                var outer_outer_cell = document.createElement('div')
                outer_outer_cell.setAttribute('class', 'spoljni-div')
                outer_outer_cell.setAttribute('id', sifra_artikla)
                outer_outer_cell.append(outer_cell)

        
        
            
                var rok = document.createElement('div')
                rok.setAttribute('class', 'trajanje')
                if(trajanje != undefined) rok.append(trajanje)
                outer_outer_cell.append(rok)
                
                var lokacija = document.createElement('div')
                lokacija.setAttribute('class', 'lokacija')
                if(vazenje != undefined) lokacija.append(vazenje)
                outer_outer_cell.append(lokacija)
            // console.log(vazenje)

                tabela_row.append(outer_outer_cell)

                // KALKULATOR START
                var kalkulator = document.createElement('div')
                kalkulator.setAttribute('class', 'kalkulator')
            
            
                var selektor_kalkulatora = document.createElement('div')
                selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
                
                var cekboks = document.createElement('input')
                cekboks.setAttribute('class','cekboks-kalkulatora')
                cekboks.setAttribute('type', 'checkbox')
                
                var span_cekboks = document.createElement('span')
                span_cekboks.setAttribute('class', 'checkmark')
                
                var telo_kalkulatora = document.createElement('div')
                telo_kalkulatora.setAttribute('class','telo-kalkulatora')
                telo_kalkulatora.setAttribute('style', 'display:none;')
                
                var minus_dugme = document.createElement('button')
                minus_dugme.setAttribute('class','decrease')
                minus_dugme.innerHTML = '-'
                
                var kolicina = document.createElement('span')
                kolicina.setAttribute('class', 'kolicina')
                kolicina.innerHTML = '0'
                
                var plus_dugme = document.createElement('button')
                plus_dugme.setAttribute('class','increase')
                plus_dugme.innerHTML = '+'
                
                var iznos_popusta = document.createElement('span')
                iznos_popusta.setAttribute('class', 'popust-artikal')
                iznos_popusta.setAttribute('style', 'display:none')
                iznos_popusta.innerHTML = '0'
                
                telo_kalkulatora.append(minus_dugme)
                telo_kalkulatora.append(kolicina)
                telo_kalkulatora.append(plus_dugme)
                telo_kalkulatora.append(iznos_popusta)
                
                selektor_kalkulatora.append(cekboks)
                selektor_kalkulatora.append(span_cekboks)
                // selektor_kalkulatora.append(telo_kalkulatora)
                kalkulator.append(selektor_kalkulatora)
            
                outer_outer_cell.prepend(kalkulator)
                outer_outer_cell.append(telo_kalkulatora)
            
                // KALKULATOR END


                red++;

                if(counter == 0) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
                // var row_id = 'promo-banner-cena'
                // tabela_row.setAttribute('id', row_id)
                tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="plava-cena" target="_self"><img src="" class="promo-banner"></a></div>'
                document.getElementById('tabela-proizvoda-cena').append(tabela_row)

                } else if(counter == 4) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row mobile-newsletter')
                // var row_id = 'mobile-newsletter-cena'
                // tabela_row.setAttribute('id', row_id)
                // var njuzleter = document.createElement('script')
                // njuzleter.setAttribute('src', 'https://maxi.sales-snap.com/form/generate.js?id=6')
                // tabela_row.append(njuzleter)

                document.getElementById('tabela-proizvoda-cena').append(tabela_row)

                } else if(counter == 8) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
                // var row_id = 'promo-banner'
                // tabela_row.setAttribute('id', row_id)
                tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="javascript:void(0)" onclick="getMobileOperatingSystem()"><img src="https://maxi.sales-snap.com/asset/1592:moj-maxiloyalty-02png" class="promo-banner"></a></div>'
                document.getElementById('tabela-proizvoda-cena').append(tabela_row)

                }
        

            
            
        } else {

        


            var cell = document.createElement('div')
            cell.setAttribute('class', 'prozivodi-cell')
            cell.setAttribute('id', 'cell-cena-' + counter)

            var razmak = document.createElement('br')

            var slika = document.createElement('img')
            slika.setAttribute('src', url)
            slika.setAttribute('id', 'slika-cena-' + counter)

            //   link.append(slika)

            var naziv_1 = document.createElement('div')
            naziv_1.setAttribute('id', 'naziv-cena-' + counter)
            naziv_1.setAttribute('class', 'naziv-proizvoda')
            naziv_1.innerHTML = naziv

            var stara_cena_1 = document.createElement('div')
            stara_cena_1.setAttribute('id', 'stara-cena-cena-' + counter)
            stara_cena_1.setAttribute('data-id', stara_cena)
            
            var stara_cena_tekst = stara_cena.split('.')
            if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
                else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

            var nova_cena_1 = document.createElement('div')
            nova_cena_1.setAttribute('id', 'nova-cena-cena-' + counter)
            nova_cena_1.setAttribute('data-id', nova_cena)
            var nova_cena_tekst = nova_cena.split('.')
            
            if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
                else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

            var popust_1 = document.createElement('div')
            popust_1.setAttribute('id', 'popust-cena-' + counter)
            popust_1.innerHTML = popust


            var inner_cell_1 = document.createElement('div')
            inner_cell_1.setAttribute('class', 'div-inside')
            inner_cell_1.append(slika)

            var popust_container = document.createElement('div')
            popust_container.setAttribute('class', 'crveni-krug')
            inner_cell_1.append(naziv_1)
            popust_container.append(popust_1)

            if(popust == '0%') popust_container.style.display = 'none'

            
            inner_cell_1.append(popust_container)
            //   inner_cell_1.append(naziv_1)
            
            var inner_cell_2 = document.createElement('div')
            inner_cell_2.setAttribute('class', 'div-inside')
            // inner_cell_2.append(naziv_1)

            var zuti_cenovnik = document.createElement('div')
            zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

            var cenovnik_left = document.createElement('div')
            cenovnik_left.setAttribute('class', 'cenovnik-left')
            cenovnik_left.append(nova_cena_1)

            var cenovnik_right = document.createElement('div')
            cenovnik_right.setAttribute('class', 'cenovnik-right')
            cenovnik_right.append(stara_cena_1)

            zuti_cenovnik.append(cenovnik_left)
            zuti_cenovnik.append(cenovnik_right)

            inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
            //   outer_cell.append(cell)

            //   tabela_row.append(outer_cell)

            var outer_outer_cell = document.createElement('div')
            outer_outer_cell.setAttribute('class', 'spoljni-div')
            outer_outer_cell.setAttribute('id', sifra_artikla)
            outer_outer_cell.append(outer_cell)
            
            

            // tabela_row.append(outer_outer_cell)


            var rok = document.createElement('div')
            rok.setAttribute('class', 'trajanje')
            
            if(trajanje != undefined) rok.append(trajanje)
            outer_outer_cell.append(rok)
                
            var lokacija = document.createElement('div')
            lokacija.setAttribute('class', 'lokacija')
            
            if(vazenje != undefined) lokacija.append(vazenje)
            outer_outer_cell.append(lokacija)
                
                // console.log(vazenje)
                
            var query = 'proizvodi-row-cena-' + (red - 1)

            

            document.getElementById(query).append(outer_outer_cell)

            // KALKULATOR START
            var kalkulator = document.createElement('div')
            kalkulator.setAttribute('class', 'kalkulator')
            
            
            var selektor_kalkulatora = document.createElement('div')
            selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
            
            var cekboks = document.createElement('input')
            cekboks.setAttribute('class','cekboks-kalkulatora')
            cekboks.setAttribute('type', 'checkbox')
            
            var span_cekboks = document.createElement('span')
            span_cekboks.setAttribute('class', 'checkmark')
            
            var telo_kalkulatora = document.createElement('div')
            telo_kalkulatora.setAttribute('class','telo-kalkulatora')
            telo_kalkulatora.setAttribute('style', 'display:none;')
            
            var minus_dugme = document.createElement('button')
            minus_dugme.setAttribute('class','decrease')
            minus_dugme.innerHTML = '-'
            
            var kolicina = document.createElement('span')
            kolicina.setAttribute('class', 'kolicina')
            kolicina.innerHTML = '0'
            
            var plus_dugme = document.createElement('button')
            plus_dugme.setAttribute('class','increase')
            plus_dugme.innerHTML = '+'
            
            var iznos_popusta = document.createElement('span')
            iznos_popusta.setAttribute('class', 'popust-artikal')
            iznos_popusta.setAttribute('style', 'display:none')
            iznos_popusta.innerHTML = '0'
            
            telo_kalkulatora.append(minus_dugme)
            telo_kalkulatora.append(kolicina)
            telo_kalkulatora.append(plus_dugme)
            telo_kalkulatora.append(iznos_popusta)
            
            selektor_kalkulatora.append(cekboks)
            selektor_kalkulatora.append(span_cekboks)
            // selektor_kalkulatora.append(telo_kalkulatora)
            kalkulator.append(selektor_kalkulatora)

            outer_outer_cell.prepend(kalkulator)
            outer_outer_cell.append(telo_kalkulatora)
            
            // KALKULATOR END
            

        }
        counter++
    }

    });

}   


async function getDataSortDiscountCategory(sifra) {
    const sifra_kategorije = sifra
    const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
    const data = await response.text();
    
    const name_row = data.split('\n')

    const rows = data.split('\n').slice(1)


    let rows_copy = [...rows]

    let new_row = [rows_copy[0]]

    for(var x = 1; x < rows_copy.length; x++) {
      let current_price = parseInt(rows_copy[x].split(';')[4])


      if(current_price < parseInt(new_row[x-1].split(';')[4])) {
        if(x - 1 == 0) {
          let temp = new_row[x-1]
          new_row[x-1] = rows_copy[x]
          new_row[x] = temp
        } else {
          var y = x - 2
          if(current_price > parseInt(new_row[y].split(';')[4])) {
            let temp = new_row[y + 1]
            new_row[y + 1] = rows_copy[x]
            new_row[x] = temp
          } else {
            
            while(y > -1 && current_price < parseInt(new_row[y].split(';')[4])) {

              y--
            }

            if(y == -1) {
              new_row.splice(0,0,rows_copy[x])
            }else new_row.splice(y+1,0,rows_copy[x])
          }

          
        }

        
      } else {
        new_row.push(rows_copy[x])
      } 


    }


    var counter = 0;

    var red = 0;
    
    var reversed_array = new_row.reverse()

    reversed_array.forEach(element => {
        const row = element.split(';')
        const kategorija = row[0]
        const sifra_artikla = row[1]
        const naziv = row[2]
        const stara_cena = row[3]
        const nova_cena = row[4]
        const popust = row[5]
        const url = ''
        const trajanje = row[6]
        const vazenje = row[7]
      

        if(sifra_kategorije == kategorija) {

            if(counter % 4 == 0 || counter == 0) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row')
                var row_id = 'proizvodi-row-popust-' + red
                tabela_row.setAttribute('id', row_id)
                // '<div class="proizvodi-row" id="proizvodi-row-' + counter + '"</div>'
                //  console.log(tabela_row)
                document.getElementById('tabela-proizvoda-popust').append(tabela_row)

                var cell = document.createElement('div')
                cell.setAttribute('class', 'prozivodi-cell')
                cell.setAttribute('id', 'cell-popust-' + counter)

                var razmak = document.createElement('br')

                var slika = document.createElement('img')
                slika.setAttribute('src', url)
                slika.setAttribute('id', 'slika-popust-' + counter)

                var naziv_1 = document.createElement('div')
                naziv_1.setAttribute('id', 'naziv-popust-' + counter)
                naziv_1.setAttribute('class', 'naziv-proizvoda')

                naziv_1.innerHTML = naziv

                var stara_cena_1 = document.createElement('div')
                stara_cena_1.setAttribute('id', 'stara-cena-popust-' + counter)
                stara_cena_1.setAttribute('data-id', stara_cena)
                var stara_cena_tekst = stara_cena.split('.')
                
                if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
                else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

                var nova_cena_1 = document.createElement('div')
                nova_cena_1.setAttribute('id', 'nova-cena-popust-' + counter)
                nova_cena_1.setAttribute('data-id', nova_cena)
                var nova_cena_tekst = nova_cena.split('.')
                
                if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
                else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

                var popust_1 = document.createElement('div')
                popust_1.setAttribute('id', 'popust-popust-' + counter)
                popust_1.innerHTML = popust

                var inner_cell_1 = document.createElement('div')
                inner_cell_1.setAttribute('class', 'div-inside')
                inner_cell_1.append(slika)

                var popust_container = document.createElement('div')
                popust_container.setAttribute('class', 'crveni-krug')
                inner_cell_1.append(naziv_1)
                popust_container.append(popust_1)

                if(popust == '0%') popust_container.style.display = 'none'

                
                inner_cell_1.append(popust_container)


                var inner_cell_2 = document.createElement('div')
                inner_cell_2.setAttribute('class', 'div-inside')
                // inner_cell_2.append(naziv_1)

                var zuti_cenovnik = document.createElement('div')
                zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

                var cenovnik_left = document.createElement('div')
                cenovnik_left.setAttribute('class', 'cenovnik-left')
                cenovnik_left.append(nova_cena_1)

                var cenovnik_right = document.createElement('div')
                cenovnik_right.setAttribute('class', 'cenovnik-right')
                cenovnik_right.append(stara_cena_1)

                zuti_cenovnik.append(cenovnik_left)
                zuti_cenovnik.append(cenovnik_right)

                inner_cell_2.append(zuti_cenovnik)


                var outer_cell = document.createElement('div')
                outer_cell.setAttribute('class', 'slicica-div')
                outer_cell.append(inner_cell_1)
                outer_cell.append(inner_cell_2)
            //   outer_cell.append(cell)

                var outer_outer_cell = document.createElement('div')
                outer_outer_cell.setAttribute('class', 'spoljni-div')
                outer_outer_cell.setAttribute('id', sifra_artikla)
                outer_outer_cell.append(outer_cell)




                var rok = document.createElement('div')
                rok.setAttribute('class', 'trajanje')
                if(trajanje != undefined) rok.append(trajanje)
                outer_outer_cell.append(rok)
                
                var lokacija = document.createElement('div')
                lokacija.setAttribute('class', 'lokacija')
                if(vazenje != undefined) lokacija.append(vazenje)
                outer_outer_cell.append(lokacija)
            // console.log(vazenje)

                tabela_row.append(outer_outer_cell)

                // KALKULATOR START
                var kalkulator = document.createElement('div')
                kalkulator.setAttribute('class', 'kalkulator')


                var selektor_kalkulatora = document.createElement('div')
                selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')
                
                var cekboks = document.createElement('input')
                cekboks.setAttribute('class','cekboks-kalkulatora')
                cekboks.setAttribute('type', 'checkbox')
                
                var span_cekboks = document.createElement('span')
                span_cekboks.setAttribute('class', 'checkmark')
                
                var telo_kalkulatora = document.createElement('div')
                telo_kalkulatora.setAttribute('class','telo-kalkulatora')
                telo_kalkulatora.setAttribute('style', 'display:none;')
                
                var minus_dugme = document.createElement('button')
                minus_dugme.setAttribute('class','decrease')
                minus_dugme.innerHTML = '-'
                
                var kolicina = document.createElement('span')
                kolicina.setAttribute('class', 'kolicina')
                kolicina.innerHTML = '0'
                
                var plus_dugme = document.createElement('button')
                plus_dugme.setAttribute('class','increase')
                plus_dugme.innerHTML = '+'
                
                var iznos_popusta = document.createElement('span')
                iznos_popusta.setAttribute('class', 'popust-artikal')
                iznos_popusta.setAttribute('style', 'display:none')
                iznos_popusta.innerHTML = '0'
                
                telo_kalkulatora.append(minus_dugme)
                telo_kalkulatora.append(kolicina)
                telo_kalkulatora.append(plus_dugme)
                telo_kalkulatora.append(iznos_popusta)
                
                selektor_kalkulatora.append(cekboks)
                selektor_kalkulatora.append(span_cekboks)
                // selektor_kalkulatora.append(telo_kalkulatora)
                kalkulator.append(selektor_kalkulatora)

                outer_outer_cell.prepend(kalkulator)
                outer_outer_cell.append(telo_kalkulatora)

                // KALKULATOR END


                red++;

                if(counter == 0) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
                // var row_id = 'promo-banner-cena'
                // tabela_row.setAttribute('id', row_id)
                tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="plava-cena" target="_self"><img src="" class="promo-banner"></a></div>'
                document.getElementById('tabela-proizvoda-popust').append(tabela_row)

                } else if(counter == 4) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row mobile-newsletter')
                // var row_id = 'mobile-newsletter-cena'
                // tabela_row.setAttribute('id', row_id)
                // var njuzleter = document.createElement('script')
                // njuzleter.setAttribute('src', 'https://maxi.sales-snap.com/form/generate.js?id=6')
                // tabela_row.append(njuzleter)

                document.getElementById('tabela-proizvoda-popust').append(tabela_row)

                } else if(counter == 8) {

                var tabela_row = document.createElement('div') 
                tabela_row.setAttribute('class', 'proizvodi-row promo-banner')
                // var row_id = 'promo-banner'
                // tabela_row.setAttribute('id', row_id)
                tabela_row.innerHTML = '<div class="proizvodi-cell single-image"><a href="javascript:void(0)" onclick="getMobileOperatingSystem()"><img src="https://maxi.sales-snap.com/asset/1592:moj-maxiloyalty-02png" class="promo-banner"></a></div>'
                document.getElementById('tabela-proizvoda-popust').append(tabela_row)

                }



            } else {

            

            var cell = document.createElement('div')
            cell.setAttribute('class', 'prozivodi-cell')
            cell.setAttribute('id', 'cell-popust-' + counter)

            var razmak = document.createElement('br')

            var slika = document.createElement('img')
            slika.setAttribute('src', url)
            slika.setAttribute('id', 'slika-popust-' + counter)

            //   link.append(slika)

            var naziv_1 = document.createElement('div')
            naziv_1.setAttribute('id', 'naziv-popust-' + counter)
            naziv_1.setAttribute('class', 'naziv-proizvoda')
            naziv_1.innerHTML = naziv

            var stara_cena_1 = document.createElement('div')
            stara_cena_1.setAttribute('id', 'stara-cena-popust-' + counter)
            stara_cena_1.setAttribute('data-id', stara_cena)

            var stara_cena_tekst = stara_cena.split('.')
            if(stara_cena_tekst[1] === '00') stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup style="visibility:hidden;">' + stara_cena_tekst[1] + '</sup>'
                else stara_cena_1.innerHTML = stara_cena_tekst[0] + '<sup>' + stara_cena_tekst[1] + '</sup>'

            var nova_cena_1 = document.createElement('div')
            nova_cena_1.setAttribute('id', 'nova-cena-popust-' + counter)
            nova_cena_1.setAttribute('data-id', nova_cena)
            var nova_cena_tekst = nova_cena.split('.')

            if(nova_cena_tekst[1] === '00') nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup style="visibility:hidden;">' + nova_cena_tekst[1] + '</sup>'
                else nova_cena_1.innerHTML = nova_cena_tekst[0] + '<sup>' + nova_cena_tekst[1] + '</sup>'

            var popust_1 = document.createElement('div')
            popust_1.setAttribute('id', 'popust-popust-' + counter)
            popust_1.innerHTML = popust


            var inner_cell_1 = document.createElement('div')
            inner_cell_1.setAttribute('class', 'div-inside')
            inner_cell_1.append(slika)

            var popust_container = document.createElement('div')
            popust_container.setAttribute('class', 'crveni-krug')
            inner_cell_1.append(naziv_1)
            popust_container.append(popust_1)

            if(popust == '0%') popust_container.style.display = 'none'


            inner_cell_1.append(popust_container)
            //   inner_cell_1.append(naziv_1)

            var inner_cell_2 = document.createElement('div')
            inner_cell_2.setAttribute('class', 'div-inside')
            // inner_cell_2.append(naziv_1)

            var zuti_cenovnik = document.createElement('div')
            zuti_cenovnik.setAttribute('class', 'zuti-cenovnik')

            var cenovnik_left = document.createElement('div')
            cenovnik_left.setAttribute('class', 'cenovnik-left')
            cenovnik_left.append(nova_cena_1)

            var cenovnik_right = document.createElement('div')
            cenovnik_right.setAttribute('class', 'cenovnik-right')
            cenovnik_right.append(stara_cena_1)

            zuti_cenovnik.append(cenovnik_left)
            zuti_cenovnik.append(cenovnik_right)

            inner_cell_2.append(zuti_cenovnik)


            var outer_cell = document.createElement('div')
            outer_cell.setAttribute('class', 'slicica-div')
            outer_cell.append(inner_cell_1)
            outer_cell.append(inner_cell_2)
            //   outer_cell.append(cell)

            //   tabela_row.append(outer_cell)

            var outer_outer_cell = document.createElement('div')
            outer_outer_cell.setAttribute('class', 'spoljni-div')
            outer_outer_cell.setAttribute('id', sifra_artikla)
            outer_outer_cell.append(outer_cell)



            // tabela_row.append(outer_outer_cell)


            var rok = document.createElement('div')
            rok.setAttribute('class', 'trajanje')

            if(trajanje != undefined) rok.append(trajanje)
            outer_outer_cell.append(rok)
                
            var lokacija = document.createElement('div')
            lokacija.setAttribute('class', 'lokacija')

            if(vazenje != undefined) lokacija.append(vazenje)
            outer_outer_cell.append(lokacija)
                
                // console.log(vazenje)
                
            var query = 'proizvodi-row-popust-' + (red - 1)



            document.getElementById(query).append(outer_outer_cell)

            // KALKULATOR START
            var kalkulator = document.createElement('div')
            kalkulator.setAttribute('class', 'kalkulator')


            var selektor_kalkulatora = document.createElement('div')
            selektor_kalkulatora.setAttribute('class','selektor-kalkulatora')

            var cekboks = document.createElement('input')
            cekboks.setAttribute('class','cekboks-kalkulatora')
            cekboks.setAttribute('type', 'checkbox')

            var span_cekboks = document.createElement('span')
            span_cekboks.setAttribute('class', 'checkmark')

            var telo_kalkulatora = document.createElement('div')
            telo_kalkulatora.setAttribute('class','telo-kalkulatora')
            telo_kalkulatora.setAttribute('style', 'display:none;')

            var minus_dugme = document.createElement('button')
            minus_dugme.setAttribute('class','decrease')
            minus_dugme.innerHTML = '-'

            var kolicina = document.createElement('span')
            kolicina.setAttribute('class', 'kolicina')
            kolicina.innerHTML = '0'

            var plus_dugme = document.createElement('button')
            plus_dugme.setAttribute('class','increase')
            plus_dugme.innerHTML = '+'

            var iznos_popusta = document.createElement('span')
            iznos_popusta.setAttribute('class', 'popust-artikal')
            iznos_popusta.setAttribute('style', 'display:none')
            iznos_popusta.innerHTML = '0'

            telo_kalkulatora.append(minus_dugme)
            telo_kalkulatora.append(kolicina)
            telo_kalkulatora.append(plus_dugme)
            telo_kalkulatora.append(iznos_popusta)

            selektor_kalkulatora.append(cekboks)
            selektor_kalkulatora.append(span_cekboks)
            // selektor_kalkulatora.append(telo_kalkulatora)
            kalkulator.append(selektor_kalkulatora)

            outer_outer_cell.prepend(kalkulator)
            outer_outer_cell.append(telo_kalkulatora)

            // KALKULATOR END
            

            }
            counter++

        }

    });
  
} 

// async function createSearch() {
  
//   const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
//     // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
//     const data = await response.text();
    
//     const name_row = data.split('\n')

//     const rows = data.split('\n').slice(1)

//     rows.forEach(element => {
//         const row = element.split(';')
//         const link = row[0]
//         const naziv = row[1]
  
//         let option_link_element = document.createElement('a')
//         let option_link_href = ''

//         switch(link) {
//           case '1': 
//             option_link_href = 'izaberi-uvek-sveze'
//             break;

//           case '2': 
//             option_link_href = 'uzivaj-u-ukusnom-delikatesu'
//             break;

//           case '3': 
//             option_link_href = 'pripremi-ukusan-obrok'
//             break;
          
//           case '4': 
//             option_link_href = 'gricni-i-osvezi-se'
//             break;
          
//           case '5': 
//             option_link_href = 'plava-cena'
//             break;
//         }

//         option_link_element.setAttribute('href', option_link_href)
//         option_link_element.innerText = naziv

//         let option_list_item = document.createElement('li')
//         option_list_item.append(option_link_element)

//         document.getElementById('myUL').append(option_list_item)

//   });


// }

async function datumAkcije() {
    const response = await fetch('tabele/pocetna-test.csv', {cache:"no-store"});
    const data = await response.text();

    const name_row = data.split('\n')
    var podnaslov_kategorija = name_row[0].split(';')
console.log(podnaslov_kategorija)
    document.getElementById('desktop_podnaslov').innerHTML = podnaslov_kategorija[8]
    document.getElementById('mobile_podnaslov').innerHTML = podnaslov_kategorija[8]
}

async function getDataCarousel() {

    const response = await fetch('tabele/baneri.csv', {cache:"no-store"});
    const data = await response.text();
    

    const rows = data.split('\n').slice(1)
    
    
    rows.forEach(element => {
      const row = element.split(';')
        const sifra = row[0]
        const url = row[1]

        var slika = document.createElement('img')
        slika.setAttribute('src', url)

        if($('body').hasClass('stranica-kategorije')) {
            if(sifra == 'hpc') $('.promo-banner a[href*="plava-cena"] img').attr('src', url)
        } else if($('body').hasClass('plava-cena')) {
            if(sifra == 'pc')  $('.baner-kategorije img').attr('src', url)
            $('.proizvodi-row.promo-banner').remove()
        } else if(document.URL.indexOf('pdf-katalog') > -1) {
            if(sifra == 'pdf-d') $('.desktop-pdf').attr('src', url)
            else if(sifra == 'pdf-m') $('.mobile-pdf').attr('src', url)
        } else {
            if(sifra == 'dc') document.querySelector('.banner-slider').append(slika)
            else if(sifra == 'mc') document.querySelector('.banner-slider-mobile').append(slika)
            else if(sifra == 'hpc') $('.promo-banner a[href*="plava-cena"] img').attr('src', url)
        }



    });


    $('.banner-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 500
    });
    $('.banner-slider-mobile').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 500
    });
}

function jumpToElement() {
  if(document.URL.indexOf('#') > -1) {
    var location = document.URL.split('#')
    console.log(location[1])
    document.getElementById(location[1]).scrollIntoView()
  }
}

async function getImage() {
  const response = await fetch('tabele/sifrarnik-slika.csv', {cache:"no-store"});
  // const response = await fetch('https://maxi.sales-snap.com/asset/194:nazivi-i-cene-artikala-za-digital-lifletcsv');
  const data = await response.text();

  const rows = data.split('\n').slice(1)

  rows.forEach(element => {
    const row = element.split(';')
    const sifra_artikla = row[0]
    const src = row[1]

    $('[id="' + sifra_artikla + '"] img').attr('src', src)

  })

  

}