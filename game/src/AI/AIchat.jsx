
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, SendHorizontal } from 'lucide-react';

const AIChat = ({ setShow }) => {
  const [answer, setAnswer] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [answer, loading]);



  
const processGameResponse = (response) => {
  // Extract key points and gaming-related info
  const lines = response.split('\n');
  const gamePoints = lines
    .filter(line => line.trim().length > 0)
    .map(line => line.replace(/^[-•*]\s*/, '').trim())
    .filter(line => {
      const lowerLine = line.toLowerCase();
      return (
        // Game-related terms
        lowerLine.includes('game') ||
        lowerLine.includes('play') ||
        lowerLine.includes('level') ||
        lowerLine.includes('character') ||
        lowerLine.includes('score') ||
        lowerLine.includes('multiplayer') ||
        lowerLine.includes('mode') ||
        
        // Game suggestions and recommendations
        lowerLine.includes('recommend') ||
        lowerLine.includes('suggest') ||
        lowerLine.includes('try') ||
        lowerLine.includes('similar to') ||
        lowerLine.includes('like') ||
        
        // Game genres
        lowerLine.includes('rpg') ||
        lowerLine.includes('action') ||
        lowerLine.includes('adventure') ||
        lowerLine.includes('strategy') ||
        lowerLine.includes('fps') ||
        lowerLine.includes('shooter') ||
        lowerLine.includes('puzzle') ||
        lowerLine.includes('sport') ||
        lowerLine.includes('racing') ||
        lowerLine.includes('simulation') ||
        
        // Gaming platforms
        lowerLine.includes('pc') ||
        lowerLine.includes('console') ||
        lowerLine.includes('playstation') ||
        lowerLine.includes('xbox') ||
        lowerLine.includes('nintendo') ||
        lowerLine.includes('mobile') ||
        
        // Game features
        lowerLine.includes('graphics') ||
        lowerLine.includes('story') ||
        lowerLine.includes('gameplay') ||
        lowerLine.includes('mechanics') ||
        lowerLine.includes('difficulty') ||
        
        // Release and price info
        lowerLine.includes('release') ||
        lowerLine.includes('new') ||
        lowerLine.includes('upcoming') ||
        lowerLine.includes('price') ||
        lowerLine.includes('free') ||
        
        // Ratings and reviews
        lowerLine.includes('rating') ||
        lowerLine.includes('review') ||
        lowerLine.includes('popular') ||
        lowerLine.includes('best') ||
        
        // Game communities
        lowerLine.includes('community') ||
        lowerLine.includes('players') ||
        lowerLine.includes('competitive') ||
        lowerLine.includes('casual')
      );
    });

  // Enhance response for game suggestions
  const isAskingForSuggestions = response.toLowerCase().includes('suggest') || 
          response.toLowerCase().includes('recommend') ||
          response.toLowerCase().includes('what game') ||
          response.toLowerCase().includes('which game');

  if (isAskingForSuggestions && gamePoints.length === 0) {
    return "I'd be happy to suggest some games! Could you tell me:\n• What genres do you enjoy?\n• Which gaming platforms do you have?\n• Any specific features you're looking for?";
  }

  return gamePoints.length > 0 
    ? gamePoints.slice(0, 3).join('\n• ')
    : "I can help you find the perfect game! Just let me know what types of games you enjoy.";
};



  const getGamesAnswer = async () => {
      const key=import.meta.env.VITE_AI_APIKEY;
    if (input.trim()) {
      const newAnswer = [...answer, { text: input, user: true }];
      setAnswer(newAnswer);
      setInput("");
      
      try {
        setLoading(true);
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `Provide a brief, focused response about games to: ${input}. 
                Keep it to 2-3 key points maximum and only about gaming.`  }]
            }]
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setLoading(false);
        const aiResponse =processGameResponse(data.candidates[0].content.parts[0].text);
        setAnswer((prevAnswer) => [...prevAnswer, { text: aiResponse, user: false }]);
        
      } catch (error) {
        console.error("Error sending message:", error);
        setLoading(false);
        setAnswer((prevAnswer) => [
          ...prevAnswer,
          { text: 'Sorry, I could not process your gaming question. Please try again', user: false }
        ]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getGamesAnswer();
    }
  };

  return (
    <section className="flex flex-col w-[65%] h-[65%] fixed bottom-1 right-3 md:bottom-1 md:right-2 md:w-96 md:h-[70%] bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b-4 border-gray-100">
        <button 
          onClick={() => setShow(false)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors" >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>

        <div className="ml-3 flex items-center w-full ">
           <img src="Ai.jpg" className="w-[40px] h-[40px] rounded-full object-contain p-2" />  
          <div className="ml-3">
            <h2 className="font-semibold  dark:text-black font-jetbrains text-sm">AI Assistant</h2>
          </div>
        </div>
      </div>
       <div className="flex-1 overflow-y-auto bg-white px-4 py-2">
        {answer.map((ans, index) => (
          <div key={index}  className={`flex ${ans.user ? 'justify-end' : 'justify-start'} mb-2`}  >
            <div className={`px-4 py-2 max-w-[70%] rounded-3xl break-words ${ ans.user ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900 '}`} >
            {ans.user ? ans.text : ans.text.split('\n').map((line, i) => (
                <div key={i} className="mb-1"><li>{line}</li></div>
              ))}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start mb-2">
            <div className="bg-gray-100 rounded-3xl px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input  type="text"   placeholder="Message..."   value={input}   onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm font-jetbrains" />
           <button onClick={getGamesAnswer} className={`ml-2 ${input.trim() ? 'text-blue-500' : 'text-gray-400'}`} >
            <SendHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIChat;



