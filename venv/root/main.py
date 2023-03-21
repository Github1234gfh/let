import logging
import openai
from aiogram import Bot, Dispatcher, executor, types

logging.basicConfig(level=logging.INFO)

bot = Bot(token="5990582530:AAEyTLllgz2tgsBKdYN8-5aK0THxB-Ij5dY")
dp = Dispatcher(bot)

openai.api_key = "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"
model_engine = "text-davinci-003"
max_tokems = 128


@dp.message_handler()
async def echo(message: types.Message):
    # await message.answer(message.text)

    await message.answer('Loading...')
    prompt = message.text
    complection = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=max_tokems,
        temperature=0.5,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    await message.answer(complection.choices[0].text)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)