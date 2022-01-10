import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView  } from 'react-native';
import React, { useState } from "react";
import CheckBox from "expo-checkbox";


export default function App() {
  const [agree, setAgree] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agree4, setAgree4] = useState(false);
  const [agree5, setAgree5] = useState(false);
  const [agree6, setAgree6] = useState(false);
  const [agree21, setAgree21] = useState(false);
  const [agree22, setAgree22] = useState(false);
  const [agree23, setAgree23] = useState(false);
  const [agree31, setAgree31] = useState(false);
  const [agree32, setAgree32] = useState(false);
  const [agree33, setAgree33] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.title}>Мои чек-листы</Text>
      </View>
      <View style={styles.manyChecklist}>
      <View style={styles.checklist}>
         <Text style={styles.checklistTitle}>Приготовить блюда итальянской кухни</Text>
         <View style={styles.checklistPoint}>
           <CheckBox 
          value={agree}
          onValueChange={() => setAgree(!agree)} 
          style={styles.checkBox}
          color={agree ? "#9C9D9E" : "#3A3B3D"}
           />
           <View style={styles.checklistPointTextView}><Text style={styles.checklistPointText}>Лазанья</Text></View>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree2}
          onValueChange={() => setAgree2(!agree2)} 
          style={styles.checkBox}
          color={agree2 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Спагетти Карбонара</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree3}
          onValueChange={() => setAgree3(!agree3)} 
          style={styles.checkBox}
          color={agree3 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Равиоли</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree4}
          onValueChange={() => setAgree4(!agree4)} 
          style={styles.checkBox}
          color={agree4 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Ризотто</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree5}
          onValueChange={() => setAgree5(!agree5)} 
          style={styles.checkBox}
          color={agree5 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Пицца</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree6}
          onValueChange={() => setAgree6(!agree6)} 
          style={styles.checkBox}
          color={agree6 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Джелатто</Text>
         </View>
      </View>

      <View style={styles.checklist}>
         <Text style={styles.checklistTitle}>Пройти часть курса по SQL запросам на Степике</Text>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree21}
          onValueChange={() => setAgree21(!agree21)} 
          style={styles.checkBox}
          color={agree21 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Основы реляционной модели</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree22}
          onValueChange={() => setAgree22(!agree22)} 
          style={styles.checkBox}
          color={agree22 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Запросы к связанным таблицам</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree23}
          onValueChange={() => setAgree23(!agree23)} 
          style={styles.checkBox}
          color={agree23 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Базы данных и запросы</Text>
         </View>
      </View>
      <View style={styles.checklist}>
         <Text style={styles.checklistTitle}>Нарисовать свое видение слов</Text>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree31}
          onValueChange={() => setAgree31(!agree31)} 
          style={styles.checkBox}
          color={agree31 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Тоска</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree32}
          onValueChange={() => setAgree32(!agree32)} 
          style={styles.checkBox}
          color={agree32 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Эмоциональность</Text>
         </View>
         <View style={styles.checklistPoint}>
         <CheckBox 
          value={agree33}
          onValueChange={() => setAgree23(!agree33)} 
          style={styles.checkBox}
          color={agree33 ? "#9C9D9E" : "#3A3B3D"}
           />
           <Text style={styles.checklistPointText}>Гордость</Text>
         </View>
      </View>
      </View>
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF6FF'
  },

  scrollView: {
    
  },

  
  manyChecklist: {
     alignItems: 'center'
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCF6FF',
    marginTop: 35,
    marginBottom: 25
  },

  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 25,
    lineHeight: 29,
    textDecorationColor: '#3A3B3D'
  },

  checklist: {
    backgroundColor: '#fff',
    width: 370,
    padding: 20,
    marginBottom: 25,
    borderRadius: 20,
    elevation: 7
  },

  checklistTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 29,
    textDecorationColor: '#3A3B3D'
  },

  checklistPoint: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
    
  },

  checklistPointText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 29,
    textDecorationColor: '#3A3B3D'
    
  },
  checklistPointTextView: {
     justifyContent: 'center'
  },

  checkBox: {
    marginRight: 10
  }

});
