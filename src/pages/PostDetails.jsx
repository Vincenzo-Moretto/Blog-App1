import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />

      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl fomt-bold text-black md:text-3xl">
            {" "}
            10 Uses of Artificial Intelligence in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@enzodev</p>
          <div className="flex space-x-2">
            <p>23/06/1993</p>
            <p>23:00</p>
          </div>
        </div>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFRUVFhUVFRUVFRUVFRUVFRUWFhUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zRDMsNygtLisBCgoKDg0OGhAQGi0mHSUtLSstLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgABBwj/xAA8EAACAQMDAgQEBAQGAgEFAAABAhEAAyEEEjEFQSJRYXEGEzKBQlKRoSOxwdEHFGKC4fAzcrIWU3Oi8f/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQEBAAIDAQACAwAAAAAAAAERAiExAxJBUSIyBBNh/9oADAMBAAIRAxEAPwDEqKbTTrAM58vKl0SnbNk1044p1J7NaO1Bq1tp3iaAluAMUzYQnir9Mpdq0tMApVcTzmi2ExQunqs+MT7edWDKJ8IxUTw162zdO2nO0ZqSalwCJ55Pf9aiFhRRbSTTslTO+pMlEs6ecmrTQacHPcUHTW6YF5UPYnsoImf6D1OBU9+mnw3OtqyGnA+44/tUEsCJfbmAM4geveg2Lt5xuCCD9O5ox2Jxk+U49qqm1Dg7nbxGVCDJVuYmct5zWGV3ffm+6ttVaCxiQewkY88Alvv+1UPUepoIRAJ/MSIX2CyB7+tXi65DbPzHDnb4oggehI5rKa7VXWBfT27TiY3bAc8ZkwWp83+s/l4ybHa3rtuwxW5bDlTDN8wllJ7BiP2gUe3qreogWL4RjxbuKyFj/puKf2AmluldXuC83z7doQuAqLvL4yYEjE49qb6t1TeqlVRjugBkNwnBDQkQO3JA9RWzj86La6C22YX2DXvOSZJB8+3JqX+RugfgI/3kx92rtFaMh2uXNwEQHMRjDDhiPPntJgGrHUanaC5yoHiAAkAD6h5jzH39KC/y/Ge1T7ZlN/I2hnTcR2mSQe/2qmXXoTFwMoJJh0S4QB2DeEqeINWnxJ1axj5NwG40boO0FM5O5SCRngTBNZ+3bDAldpA+oh7ON3Y7rOPemc39O2upaZgCgXaRgkshGe4YR5fiptblvaQot3GkxKqtxBndlgQDMRAA5qgs7VYMLLwMwq27i4//ABsuMeVPdR1iMiori0+4kkoNzY/NEEDGCfuaBpbqAtZFzTk/+sWrq+oKLtuj1j7VS6zoLlDd07G6i/UsbbqTnK/iEd1/QVoNHdu/+O7tvWzEMcgHB5GBiczIigX9MZL2WY7cgYNxP9SHi4v780Ye1ibjmBNK3BNarqGkGpyIW/k4wl+Of/W5/PvnNIaHodxxO04MHtB8jPeptkXzz13cig+WaiyGtb8U/Di6RE/ih3cSFCkELA8X6yPt7xlWpc9TqbB38f0uUNrRqVvTseBNHtuo5zWn6L8Ti3CJaQE4n371HfXUniNvj+Pnr3WNNkjkV5trV/FPyVciUL8sLeVBOcnuay91h2o46+01XycTnxKCy0JsHNTuNigjNWxlN2czS1w5qdvHehvzQURdq8V6mwFRWgNdpEzVlYQE1W6c1a9OzzW3Lk7aPp3yflsHUyeD5UfRXVWRtBBxkTSdsiMD/ipoTReYrn5L4z8OWVBbAp6wKBpUxVzo9LbgbiQfTvWfXX1a8fHfk9AC0WmB9Ik+1TsJHNXhItqAIAIM4yT2qle8GOFgeU49ajju9X14afJ8U5k/ol24/MlLaiXeVXzgAzgewnNJX+taZLTMgLlf4Ynw5aWZiAZ8R8+y9u9Z8VOYXxsF2XDA43gpBI9i1Uuv6ffS4wAXafCUyVYHJ2nB3YwvOPSadmlz4h1Ou6o3DeS8VBgMRBnyUAgj+01Z6bXJ/wCRru5nneBlmXOFJGJx4vIU18O/DAS2DeA4kWSFfbI/GxBzngfcmm+rdAtXFJtIttwIUqoAI/KREfeJFVifv5Vj9UtswdUAMnYiDbtHEtGGY4PcD1rrl1XVle4FCrO3lVP5QPxMTkn0+9U5sgMSDBEBYKnb5ys4xP70Ztz2CmAQ88ZcgRJ7mJp34/2FP+RLMqx0OpZNKrOQ5uP8u0GCnYlskMwnliSVHMUt1C4o1FtjbK21YIjlgE3AGSFP+sgz2jyqtN2VWzIY2SHClkUYzknuWBMY5zPFZ67qXR1uai0bgTdsyHtl+BLrKn2pSYVsvp9HS6ZqWt6mtpJYiW8IU/ikQceUc18rX4y1CE77oZiSSABCg52g94r0dVa9Dbne5OB4VAHbM8fpxTElanT6HU37LMuiBJgWzPyisSCQHYEgwOZ49aSurqdKQbtt0A5LLKkfl+YMRV98MfFigLa1DEMMfMJlSQchz+E9p794ra2Ly3FlCrqRypDKR9sUDyzHwx1fSW2uq6oh+Yw+aUVcADwOVEgjOTgwT6VtLGqs3V8L23U+TKwP718w/wAQuj2LAF5f4ZvOVdR3JlvmBfQ8gfmrIC0yQZlSPqH0/ZhOP/5yDSsLH1b4t6FozbZ0+XauqJG0hQ2RIZV7esVibFq4sMhB7kBlP7g4P/eKb+GtNKHAO6PIkie/pI+8elMazpI5UAeYkD9jSXJ4K6rRNcU3AjK6jcw2wWAH1r2LgeWGH7UWv17CG3Q4gNGA4/C4/wC/uDOn/wAqFAAclxgbFJAXuCTG4enqarutaXfbMhA65G0Fd3mACAJ4P28+X7Obz5jLdQ6k93LMxgQJJMCqd6duJmlri0ZhddXq7QJoe8iixQLlI9cHJqYFDSpqalp+B3BioKBNSuDFRS2ZFNIgQZpdxmm170nc5oojjXKKiamopBsdOtWmjWq+yhqy0hg1vHL15XdgjE1cubRA2iDyfL1xWf00k1daO3GTR1NHHf1lmHLFvFPWdUBG4Z8+9KWbnkKMqjnmo65la/H8vXHp3U9cJEqXMjwbiIAEyT7x+9Vlv4otXP4YFy2x42kDcZx4gJ8zEHis/wBX6gxv3CDgHaPZcfz3VU6vqDhsejEgDA4+3JrP/wA/HR7m321HXtXavqyuzbUQncrjdOUgjbDA58jwfSqLqnXrttlds/SWUBSp2t37TjmqpbzM0GQjckCBCkYHYnP71LqFrTXVZVv7SIkXLZUD1DJu8/KqiOmq13xJeuDfZY7QQ0jIA8zHbH71daX470vyx81ijgeJQC0kflI8/Wvmmh0ly2hNt0KrlXt3VyePRvLt3r3V69gP42yYwblsE+UkKAYmnqJx4WDdbD3LjZAuHcduDIIZe/Ij9zT46soAbftDeIyOcwwxPft61R6cWjb3XW06752bTctkAGC5kxz2IqFzTp8uDqLXhPEu2OQZRDz7Vr9vDmvx3VlrdbYVvmB2B5KKo8XlLZJHB5FDs6sNeDLvslhL7TCusGDHnODz9Jqh1VpTPy7pe4F3QtshI8tzGR6So/eo6DX/AMQB5BEFZnKsBK+4z+lZ1vJkbzTdYuL/AOO3ZQH6iLFnc5/M525Jqj+IbQYNdVEV+SFVUBjJgKAAcU3acRIqv1+uVBuYkAe0z6A96DmqC51FAikSWzuIP1AzB2+YxTFvqHyph2QkAHbII78gj0qPz7B/ibQYHidkCkn2Eqxx5z+tU15y5L/hJyfL08/KkrF1rero6bDcZiY+pd0d9wc+JWny7Y4prpfVPl2/lpDTktBBPu0yPLH/ADWZ+SOxn2p7Q3NpyB/WlqvrG06XqXYguSfcyP0rc9MfcAD/AFivnfSNcojn2zW16VqweP60rVSSNXptHbP4R+lS1Xw/auDIj1FR6feq5ttiik+L/wCIXwqdIy3VzauGJ/K/MfcZ+xrDXa/SHxH0xdVp7lhsbx4W/K4yjfY/tNfnLWWWRmRxDKSrDyZTBH6inKy6nkmxoZopFDNM4ilSt14KiHiobfiNwYqa8igvcrt2400YZB5pM80VWiRQu9AxJlqds4qLcV7b4pHG6+cOwpiykmlNPa86sdOkZrocVsi16cAvIq7sMrHPeqKwpBzxWh6YEI8Qz2NHVw+OftTNq1tqNxioZhBIBOccZ5orgTCz96XvFdrBzAYFZGTkdh3rPWt4yshfXOeYEyO8Z/cmqnrXTjb2swPjQuJxjxBMHygn7itunSbW83X+Y4ncqi3dAHcEmBP6xWU+IepreuAhWUAkeNtxYSJYkknI9azkb9db4ipv6jwqFONoA7cKJP3JNVtkbjiBGGzBg4HPfJNWmrHy5VQEksPbMxPrIPtFO/Dtq3evNZe7caFBXcFlyWVGmZ2xvkROFqkWqrTaUi0mxUDEy/jUE+Ig7ZjgZjnP2qf+fYTb1VuIJAbarg5wzWbmD2ypU1Iqv074bcfmqyyokyCPPcpVv2inNGg+U43SQPCkrcWZHKGWiJ9aqRHXWEr1vcB8q3p7wgwACjcyItlgSccLORVfe1jLh7KIxmFKZwJyHk9q91VlrqAW1G5SfAs+Kc+EfiPJA5yY8qBY6rcS2ZuMADtClpyORDe1MsB1XUS6k21tpuENsUrOI4mByeAP5GltHp7l1SFibYM74iJEDceOT+1Stdcuk8Wz6mzamO+dvlTl3q+oa3b2EmGuBlRYBwjISq+k8flqWmD67VLYCBXYHbDBWclmBgzuMAyCPaKrLWpZzvufQMHJJzwFPdqcs9La7tNxoW2CGPcszFiP3iP9J4GaudL0jS3IQMQwwu4lUBPYkE7Z/NtPrS8RUm+mc1BRiPq2gYGBtPeRwx9cVC2iKQd3HbaRPoTkCra9oEDNbIe1cUkbbhVlJHbeoG2exIg+Y5qra1TLHfLAP701YsT2r3QabzPtWl6V0vf2xSqoR0Gm4x+tbDpCkR/b+9dp+nKvApy2IqVL/p96tDpnkVk9C1aLSa60o8TgU001cavif+Kmg+Xri4GLyLc/3ZR//iD/ALq+xjqdm4YVxPlxPtXzr/GHTyunueRuIf8AcFYf/FqcR3PD5cxqDipuKCxp0R0VHbU1NcrVDWf6guuKHa5oznwmg2jmmmJTzQpzR070I80jv8RLVNDivLgolsYoS+n6e1aNvdv8XlXqpnFJ6VfDTVqf0rojk6y4urLqyicEYpzTgjikdF/OrOxfjt7UUuTWntsc+VA1SuIZBuZDO2Y3qRBAPY9x7Ua1qiMVO1cE1nl/W96mSQtpLGnvHG4EYe0Ge3k/ntgj9eD61lvif5AuuipkJctRBG14Qq4kZxOc+9bPU6O1dI3qCR9LZDr/AOrDI/Ws18YdI+U9t2ZnT62LGWASIQtyZkAE8T3pU+fLHau290QAPCPG7ZI8UY7kkKv/AE1DU2Nni0+83WG3dHAghjMnyicfeoajUXN5t25Idt0LnxKIn0AB57TRbGsFvwnxbeY4LR29AP6+dJcm+D13Ti0Z2qTdW0RIko3yx8wT6OHE+UUhY0G5mb6fFyMSZ4J7Vfanr1m4VYWQjCOMjB/LI596y/UnA+YVYFQNqgAjbPII7czyeKrnrYn5OPr0lrul3bji2g8W4wCQDPMyYiYnPaq3/Pu0rqES9twC8i7jEC6kMfY7hRtNq5UTmB5ycYH9BVbrLoueIRI9AJ9cd6P0fhi1o9MxhLty0cyLii4OP/uJED/bTmm0t63DIVuAY/h3AcEycYY/pSNjpl0ILmzB7yMDvIma6y24jsZG0cTPGfOgptXmoY/KtooMvLmecnufPGf+KU1Ltb8JUr5SIn1zVx07NxJyV5POQeP1pL4n661y4VEbVO0GATI5isrXTzPRHqGpZ9rN9W0AnzgR/IVWm5nNOH6QDkxn75pdrFEp3lYdOORX0LoNobRXz/pluDWx6dr9oAp6jGoOnxSl9CtF0fUQeasVtq4p4W4y9/qRXFM9M6vJg171zobQWQfast0bqKfN2NtDAwQ5Iz5dh+4pKmVrOuWpX5ieEjMjvVf8Z6s3unW3b6lvLJ9drj+tWfU9X/C2FY3ER7DuMkH7Gs58aXxb09rT92m4f1gE/wD7U+faO/TCkUtcFME0NqdRz5BQ16K8mK9t0v1pvgu7Hio2uaYZcUIfUKCglvvS85ppW+qlW5oL9evNEttioE4qdvikcuPoNtoFNaU5qrW5R7F7tW+uTGo0dwRiMCptdzgzVIuo8sUW1ezFFHMaKzc3EAU81sgT286ptA0VaW9V9/eo61rxecym9KjEMQJgH3JjAFZTrPVf8z9a+FR4FBIOYnxck4H6VrNLeIwB3mqjqPRlBZ9sq8lh+Unn7Gpur5+viR846u1xPBbYwYO0niY57HyoektqQd52jBmY5Hc++Kt+qaIo2w5mflt2I/KfWqQaVvEOVPKZ9/6ClurzALQi8QCW52wZBGIYHy4rzU6V9inafESeOcD+jL+tGfpzkqQ+1vpVYI2rOPETmTP6Vok6WUtBy5bYPluoBDWzMgkEwcCP9wo+0g+lrE9MDJdXcsqJwSVBMYEj1j/ipabQL8//AEDxQfPy9pineqkGRJzLCeeeWpMtGwxAGN09/OfL0on9Fn4sruoILS3hiSP5VWqAZcriMDvuod66zGJgzIjAzxJry4txR4zPr3BPrT0pF50jWwZ/K0mPyny/T9qV12iZHYqC6kkqygsIOcxwfeq/T6gowYdgP5CavLGsttkSrf6Tg+sf2rK+3Rz6xWaC6suDlmAifQmfvxTS267WlSwciX/NxPqR3NEs3FAlgT6Ax+8H/vlQKLaxTVu/FKJxUqpFW2m15FX/AE7rERmsUGpmzqCKZY+taDXJcWDXzH48+FGGoNxFJDEHH8v+aseldSIIzWy0uqF1QDmnupzKoOhfB1w2rb3bzwpkWjkL6T37VVf4sdPKXLFwfQ1opPYMjFiP0cfoa+maa4AsUl17pS6yw+naJPitsfwXB9Le3Y+hNOTGfVtfn9hS7tT+s07I7I4KspKsp5DAwQfvSDc0UoHcounNQuCa9tYpLx104NBs5NdcuV1o5oOQcAeKlJzRi3NCHNBY8dqlbbFEuDFStLikf1rTK9NWHAqtVqZttWuuexd27ZKyKNZBmqm1eqy0etjFK2qnPNXmkucVY2SPMVnk1M09ZvzT1FmNPYuDEUe5dHH/AE1mlvmmbOpNByGuo9GS5bYIFW4w2h2BcKCVLQpMAwImsJ8QdGNnVt8tS1sBSqFjuYHJAYZ8xMzX0GzqzEUf5VpyGdFYxEsoJA8gTxU2L56svl8z0/Q7928FAJkAjdIMQCBnyBq86kl/TotsiUdWtsGUfUoH4skKwKkZwy1vtRe04dG+Uyn6fmpzbMQJUcqZ5g+tVHxtpLX+XN1r++YCD5igSJnbiCeZxWG39dvPPF3K+N9Y1vK7eORGRFV6oYG6YJ8p4/rTfURubcBiduCCWEfz5H6VC3cKpt4E43kfyXJ9q1lc1j1timGmQMEnnv8Ab2pPUOoG1cyZJ54/rmvWIkgDJzgQoPOP+aFatFyFB9p7edKqiNogmDRUlDHY5B/pTGo6SQpKtPoRkx5Ed6WsPI2t9j5Hzow/t+nbd0mnbYmqrStBg1bWjURrbpq2KkRQA9S+ZVJesK8WumvVoB3SNmtl0C9xWN0orV9EFOF009y/xnmmLWqFvxFhHesz8WC4ttLqSQs7wvMGIP7fvWJu9autlmCJ/rJM/pyfai9Ynnj7TdXv+KmgsXI1unYEkhL6jziEufttP+31r5ky96ver9VFxflpO2ZJONxHGPKqOaf4mczcjwcVJRXA4rxTSXngrdBqKvBppgKXuKJ5oK+BLZkMaCjZo1hRBzQO9CIYu3MV7ZuCKG/FRQYoVemiWjIaCtFWtHOZtmmrRpNDTNs0A/ZarCxfiqu0abtGmSyt3Zpq01V9o03bakaysvTlu7VZbamLbUGs7d+s98fojaZrpWGQqSyAByMhhPPeefw1aq9K9ZUPYuq3BRp+wJpYqWx8a1FwnBYsCJVoABHY479j61XXbzAx2weKtNDpi21CBtLEn8wWACfbBj1qu6io3kDO2FkcGBH85qWuiaa9PMiDyv8AUf2imLR2XA34T34icfbNKadafuxt2FYbkE9wQP2pad58LtXxVBqQPmMB2Mj7811vWOvhB9pyf50G0kEkkknn9aL6LmeTlsCQSCcdjGc+lWFk4qvBo+nvZqLWsmHa4URBNcbdGqxFTRUoe2prT0sP6U1oOnaoLWasNTtwBlgsVn8S8j+/tT1NjZWutWiIdgB3nP7d6+dfGdi38z5llpttjaRBU849DmnU0DZ+Xe3OMqrgBW9iOD71l9frXuZaMdgIA88U5bUd888wtuqKivN1eE0UczyhNSFQzREpK5CvCBQVWab1RkYoWnGc0D/apWlgGgXOabVeaUY5og7kjwk16hxUn4qVrimiL5aItCFEWtGBhDTNs0ohpi2aCO2zTdo0jbNN2jQD1o05bNIWjTdo0wdtmmENKWzR0NIGVas18a9Y2W/lKwUvgnyXv7k+Qqw6r1IWlJESBkkgDPAk9z/31+ZdQ1G5zcdtzHuZ2j0A5b9AKVq+ZqPzjAVcLEZ5K5y58s8cZpXqWj2QwMyxmQBPOcdv+KNyYB9ST3jifIT2pBFJYAnkwCTjmOTgCpayGel2C52iJ9SB9hPJ9Oab1W2NoncCM4z5+sUto7ZW4sc7l9fxD+370fXJDsRxvP6T2pZ5Vb4RVVOTO78Mces15dHlzRDaKmDyB6HkT2rxV71OqxzLJgf9HevbQgjw44jvH96nvVHkSQQM+veP1qCEcj6vvOTkEU5Mibdqy0d0cT+tWISaqlfj05pq31QL+Hd94/pUfW2+F/8AZJPJlrVCKUxa6tYb6gyHzjcP2z+1NLp1cTbZXH+kgke45H3oyw53zSdjmnbtuFntS5skU7pbsfVx3J4AHJPpTlFUWp60FJCJBEgMTwfOI/rWcZ6b1+oD3HYcMxI9px+1Isa0zGFtvt6xqfahE0QHFJUr3tXK1RD4r1aBKkKkLc1G3RlFTWvNCtjmkipmnEaJpYuN3FOJ+RBmIxRLTYqLuM4qC3fSmmZGkWprQxUxVuYdKPbNLIaOlMjds03aNJW6atGmDts03aNJW6atmgHbZpHqnXEtDaPE5wB6+teai/yJhVG528h2UH15PkPesFrdZLMwETxPIH94/nStVzNd13qLu0u+4+nA9h2qptWix9sn0otnTtcb07nsP7mr7R9DuMv8NZzk+Z7kE4MUpF24zmraPCPdv6CmdFphdKgvs2r3BbPcmPpHH6Vqv/pxLS7iFLQCxYAgQIx29/OfWs3riiWVW1uX5jMXn6oUxHHE/wAqVhzqUZ79u0DsJuGZ3GQkiRKjvEmk0cmZzMwe8/8AZpUMQApnnvOPPFOs6FvAIEDBMmYzU1cglsTRL2FxXlsYqWpUkY+/t3rNqhZcq4kTg58jjNSsgFi0RnFQsoASQeAMetFsTwfXNa3+MZ48iNQmaiOaC5qvTG3agzV4rEEEGD2IMEexFQY1HdSNZp1u+uCwf/3AY/rz+9La3q124NrNCnlVEA+/c/ekmaou1JeosaHUmqINAegUTtQlo3akqIjiiRihE4FFnFMkLL0yDmkhzTSPDD2qWk8RBPxUqYmmN+WNLBs8U03q325gPKi27Yjios+OKF8ykMkaQVJa9rq1c4qUe3XV1ANWhTVoV1dTI3bFMrjPlXV1AUHVL5ZVsjBufxLh7wchfT8K/aqMdPa4+0DcScKO/r7euB611dSXuRtekfCttADeMnyWT9lUCY8zVzfQqIUbBgQQGeIMeEYUY9ftXV1W59trPdYtAkJcgsZICmGHkYnB8vbtWa6joGCSy7mE7WxIEj6hnET9+9dXVNbc3MUdiybjwo55PkKcv2tp2CDHMc+xNdXVnZ4bzq68f6f0/nTa5rq6sb6bQuFy3v8A0FGQV1dWvLH5PERegPXV1WxAcUPvXV1JTrhoZNdXUjQZqhXV1I0wtFRq6uoVPYDNTVoTXtdQQB5rtUePaurqTTf8UdPw1QQ5ryupsxLrY7V5bUR2r2uoVy//2Q=="
          className="w-full mx-auto mt-8"
          alt=""
        />
        <h3 className="mx-auto mt-8 font-semibold ">Descrizione</h3>
        <p className="mx-auto mt-8 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos harum et exercitationem eligendi, iure sint
          facilis nisi. Quaerat iste animi corrupti quos ea incidunt error itaque dicta aspernatur id? Delectus.Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Eos harum et exercitationem eligendi, iure sint facilis
          nisi. Quaerat iste animi corrupti quos ea incidunt error itaque dicta aspernatur id? Delectus.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* comment */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@Enzo</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/06/2023</p>
                <p className="text-gray-500 text-sm">16:23</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice Information!</p>
          </div>

          {/* comment */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@Enzo</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/06/2023</p>
                <p className="text-gray-500 text-sm">16:23</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice Information!</p>
          </div>
        </div>
        {/* {write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" />
          <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0 rounded-full">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PostDetails;
