import { ScrollView, Text, View } from "react-native";
import styles from "../config/style"

// export defaylt function ja declara a exportação do  
//componente para ser usado posteriormente
export default function HomeScreen(){

    //estrutura basica de um componente 
    //precisa ter um retorno
    return(
        <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo1}>The Magnus Archives</Text>
         <Text>
        <br></br>
          Plot
        <br></br><br></br>
          The podcast is initially presented as a horror anthology, following the efforts of Jonathan Sims, Head Archivist of the Magnus Institute, to record on tape a number of statements of paranormal events that have proven impossible to record through conventional, digital means. Over the course of five seasons, a more complex metaplot develops, revealing the nature of the Magnus Institute, its head, Elias Bouchard, and the nature of the paranormal events recorded in the statements.[3][4]
          <br></br><br></br>

          Season 1
          Season 1 of the Magnus Archives ran from 24 March 2016 to 13 October 2016.
          Jonathan Sims is installed as the new Head Archivist of the Magnus Institute's Archives, his predecessor Gertrude Robinson having gone missing and is presumed dead. As he attempts to digitize statements about supernatural incidents, he finds that some statements can only be recorded on a tape recorder, as opposed to the preferred digital recordings. Among these statements are mentions of paranormal books referred to as "Leitners," many of them having originated from a library previously belonging to a man named Jurgen Leitner.[5][6] The final conflict of the season involves a woman named Jane Prentiss, who has become the host for a mass of parasitic worms that attacks the archival staff. In the chaos of Prentiss' attack, Sasha dies and a supernatural being assumes her identity. During the attack, the body of Gertrude Robinson is found in one of the tunnels beneath the institute.[7][8]
          
          <br></br><br></br>

          Season 2
          Season 2 of the Magnus Archives ran from 1 December 2016, to 31 August 2017.

          Jon becomes convinced that there is a conspiracy behind the murder of Gertrude Robinson and his paranoia continues to increase as he begins working alongside Constable Basira Hussain and the police to investigate. Jon begins to explore the tunnels beneath the Archives, and discovers evidence of both Sasha and an unknown old man entering the tunnels.[9] Melanie returns to the institute and insists that the Sasha currently on staff is not the same person she met on previous visits to the institute.[10] Jon discovers that a creature is impersonating Sasha and it chases him through the Institute tunnels until Jon is saved by Jurgen Leitner.[11] Leitner explains that he has been hiding in the tunnels since the destruction of his library in 1994, evading various monsters and people who sought to do him harm. He then explains his understanding of the entities behind the books: that they are manifestations of vast, powerful entities based on primal fears that exist just outside of human perception. He also relates that he believes that the institute's Head, Elias, is the one who killed Gertrude, who Leitner had been working with to destroy the institute, itself a place of power for one of the entities known as The Eye. Later, Elias brutally murders Leitner with a metal pipe and frames Jon, who flees from the scene.[12][7][8]
          
          <br></br><br></br>

          Sequel
          On October 24, 2022, it was announced that a sequel was in the works and would be funded through Kickstarter.[58] On October 30, 2022, the title was revealed to be The Magnus Protocol.[59] On December 14, 2023, the release date was revealed to be January 18, 2024.[60]
        </Text>
      </ScrollView>
    </View>
    );
}

//eu nao preciso da linha abaixo pois declarei 
//a função direta 
//como sendo uma função de export defsult