import React, { useState, useEffect, useCallback } from "react";
import { MessageCircle, Send, Loader2, Moon, Sun } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const ChatClient = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ws, setWs] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const wsConnection = new WebSocket(
      "wss://8f07-13-51-196-191.ngrok-free.app"
    );
    wsConnection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "requestId") {
        setRequestId(data.requestId);
      } else if (data.type === "response") {
        setMessages((prev) => [
          ...prev,
          { text: data.message, type: "response" },
        ]);
        setIsLoading(false);
      } else if (data.type === "error") {
        setError(data.message);
        setIsLoading(false);
      }
    };

    wsConnection.onerror = () => {
      setError("WebSocket connection error");
      setIsLoading(false);
    };

    setWs(wsConnection);
    return () => wsConnection.close();
  }, []);

  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || !requestId || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      setMessages((prev) => [...prev, { text: inputMessage, type: "user" }]);

      const response = await fetch(
        "https://8f07-13-51-196-191.ngrok-free.app/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input_value: inputMessage, requestId }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");
      setInputMessage("");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [inputMessage, requestId, isLoading]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        isDark ? "dark bg-slate-900" : "bg-slate-50"
      }`}
    >
      <Card className="w-full max-w-3xl shadow-xl bg-white dark:bg-slate-800">
        <CardHeader className="border-b dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-bold dark:text-white">
                Chat Assistant
              </h1>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 dark:text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                <Loader2 className="animate-spin w-4 h-4" />
                <span className="text-sm">Thinking...</span>
              </div>
            )}
          </div>
        </CardContent>

        {error && (
          <div className="mx-4 mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        <CardFooter className="p-4 border-t dark:border-slate-700">
          <div className="flex w-full space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-lg border dark:border-slate-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatClient;
