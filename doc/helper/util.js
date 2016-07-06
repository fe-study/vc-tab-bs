export default{
	/*
	 * highlihgt lang setting
	 */
	setLang(source, lang){
		return '```' + lang + '\n' + source + '\n' + '```' 
	}
}