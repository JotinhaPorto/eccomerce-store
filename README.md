![image](https://github.com/JotinhaPorto/eccomerce-store/assets/122660604/e6c28a46-ad77-47ef-a6e0-dec6f746b8d1)# E-commerce Store - README

## Visão Geral

O projeto E-commerce Store é uma plataforma de compras online que permite aos usuários explorar e comprar uma variedade de produtos. Os produtos são alimentados por uma API externa fornecida por outra aplicação (em desenvolvimento), onde os itens são gerenciados e atualizados.

### Funcionalidades Principais

- **Página Inicial:**
  - A página inicial exibe o nome da loja, categorias, carrinho, um outdoor principal e produtos em destaque. A visibilidade dos produtos em destaque é controlada por um booleano vindo do painel de administração da aplicação externa.

- **Categorias:**
  - Os usuários podem navegar por diferentes categorias de produtos, visualizando o outdoor da categoria, com a opção de filtrar por tamanho e cor por meio de query strings os produtos.

- **Produtos:**
  - Os usuários podem acessar informações detalhadas sobre cada produto , aparecendo produtos sugeridos que são produtos da mesma categoria, tendo também como ver uma imagem do produto e opções para expandir o produto na página atual ou adicionar ao carrinho.

- **Expandir Produto:**
  - Ao passar o mouse sobre a imagem do produto ou o próprio produto, os usuários podem optar por expandir o produto em um modal que exibe todas as informações detalhadas e oferece a opção de adicionar o produto ao carrinho.

- **Carrinho de Compras:**
  - Os produtos adicionados ao carrinho são exibidos na página de carrinho, juntamente com o valor total da compra. Os usuários podem remover itens do carrinho, e o valor é atualizado automaticamente.

### Tecnologias Utilizadas

- **Next.js:**
  - A aplicação é construída usando Next.js, que oferece recursos avançados de roteamento, layouts, pages, links e navegação, route groups e dynamic routes.

- **Zustand:**
  - Zustand é usado para gerenciamento de estado global na aplicação, tornando o compartilhamento de dados entre componentes mais eficiente.

- **Zustand-Persist:**
  - Utiliza o pacote Zustand-Persist para persistência de dados, permitindo que o estado global seja mantido entre sessões de usuário.

- **react-hot-toast:**
  - react-hot-toast é usado para notificações na aplicação, tornando mais fácil informar o usuário sobre ações bem-sucedidas ou erros.

- **react-icons:**
  - React Icons é utilizado para adicionar ícones interativos na aplicação.

### Desktop 
![image](https://github.com/JotinhaPorto/eccomerce-store/assets/122660604/1b7638c1-ebc0-4172-9ecb-dd91c6754e56)


### Mobile 
![image](https://github.com/JotinhaPorto/eccomerce-store/assets/122660604/c7a66ea7-a6df-4ce6-823c-6cb18b20f3d7)


 ### OBS : ainda não foi feita a implementação com sistema de pagamento 
